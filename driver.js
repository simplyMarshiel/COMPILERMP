const fs = require("fs");
const scanf = require('scanf');

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const antlr4 = require('./pascalfiles/antlr4/index');
const PascalGrammarLexer = require('./pascalfiles/PascalGrammarLexer');
const PascalGrammarParser = require('./pascalfiles/PascalGrammarParser');
const PascalGrammarTransformer = require('./pascalfiles/PascalGrammarTransformer');
const PascalGrammarAST = require('./pascalfiles/PascalGrammarAST');
const traverse = require('./node_modules/@babel/traverse');
const PascalGrammarCleaner = require('./pascalfiles/PascalGrammarCleaner');

function build(input){
	fs.writeFileSync('error.e', "false", (err) =>{ if(err) throw err; });
    var chars = new antlr4.InputStream(input);
    var lexer = new PascalGrammarLexer.PascalGrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new PascalGrammarParser.PascalGrammarParser(tokens);
    parser.buildParseTrees = true;

    return parser.program(); // returns the parse tree
}

var declaredList = new Map();
var scopes = [];
var filename = scanf('%s');
var input = fs.readFileSync('codes/' + filename + '.pas', 'utf8');
input = PascalGrammarCleaner.generalCleaning(input);
var tree = build(input); // commence lexer & parser

if(fs.readFileSync('error.e', 'utf-8') != "true"){
    var output = 'const scanf = require("scanf");\n' + input;
    output = PascalGrammarTransformer.evaluate(output);
    // console.log(output);
    var ast = PascalGrammarAST.generate(output);
	let sem = "";
	// traversal path
    traverse.default(ast, {
    	enter(path) {
	        //console.log(path.node);
	        if(path.node.type == "CallExpression"){
	          var checkIfCallee = path.node.callee

				sem += checkIfCallee.name + "\n";
				if(checkIfCallee.name == "require")
					sem += "Require" + "\n";
				else if(checkIfCallee.type == "MemberExpression")
					sem += "Console call" + "\n";

				else {
					var childrenNodes = path.node.arguments;
					// console.log("Hehe" + childrenNodes.length);
					for (var i = 0; i < childrenNodes.length; i++) {
						// console.log(i);
						var child = childrenNodes[i];
						if(path.scope.hasBinding(child.name)) {
							sem += "Valid usage of " + child.name + " at " + child.start + " : " + child.end + "\n";
						}

						else {
							sem += "Invalid usage of " + child.name + " at " + child.start + " : " + child.end + "\n";
						}
					}
	        	}
	        }
			// console.log(path.node);
			if(path.node.type == "VariableDeclarator"){
				if(path.scope.hasBinding(path.node.id.name)) {
					sem += "Valid usage of " + path.node.id.name + " at " + path.node.id.start + " : " + path.node.id.end + "\n";
				}
				else {
					sem += "Invalid usage of " + path.node.id.name + " at " + path.node.id.start + " : " + path.node.id.end + "\n";
				}
			}
			if(path.node.type == "AssignmentExpression"){

				if(path.scope.hasBinding(path.node.left.name)) {
					sem += "Valid usage of " + path.node.left.name + " at " + path.node.left.start + " : " + path.node.left.end + "\n";
				}
				else if (path.node.right.type != "BinaryExpression"){
					sem += "Invalid usage of " + path.node.left.name + " at " + path.node.left.start + " : " + path.node.left.end + "\n";
				}
			}
			if(path.node.type == "BinaryExpression"){
				if(path.node.left.type != "BinaryExpression")
					if(path.scope.hasBinding(path.node.left.name)){
						sem += "Valid usage of " + path.node.left.name + " at " + path.node.left.start + " : " + path.node.left.end + "\n";
					}

				else {
					// console.log(path.node);
					sem += "Invalid usage of " + path.node.left.name + " at " + path.node.left.start + " : " + path.node.left.end + "\n";
				}
				if(path.node.right.type != "NumericLiteral" && path.node.right.type != "StringLiteral")
				{
					if(path.scope.hasBinding(path.node.right.name)) {
						sem += "Valid usage of " + path.node.right.name + " at " + path.node.right.start + " : " + path.node.right.end + "\n";
					}

					else {
						sem += "Invalid usage of " + path.node.right.name + " at " + path.node.right.start + " : " + path.node.right.end + "\n";
					}
				}
			}
		}
	});

	fs.writeFileSync('sem.e', sem, (err) =>{ if(err) throw err; });

    try{
		if(ast != null){
			var test = require('./output');
			test.run();
		}
    } catch(err){
  		let custom_msg = 'line ';
		let line_number = err.stack.split('\n')[1].split(':');
		line_number = line_number[line_number.length - 2];

		let col_number = err.stack.split('\n')[1].split(':');
		col_number = line_number[line_number.length - 1];

		custom_msg = custom_msg + line_number + ':' + col_number + ' ';
		custom_msg += err['name'] + ': ';

		if(err['message'].includes('Assignment to constant variable.'))
			custom_msg += 'Constant variables can only be declared once';

		else if(err['message'].includes('is not defined'))
			custom_msg += 'You forgot to define "' + err['message'].split(' ')[0] + '"';

		else if(err['message'].includes('Invalid array length'))
			custom_msg += 'Invalid array length';

		else custom_msg = err['message'];
		console.log('[ ' + custom_msg + ' ]');
  		console.log("Uh-oh... Something went wrong during execution.");
    }
}

// console.log("\nParse Tree = " + tree.toStringTree(parser.ruleNames));
