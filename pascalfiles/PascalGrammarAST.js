const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function generate(input){
	const babylon = require('@babel/parser');
	const traverse = require('@babel/traverse');
	const generator = require('@babel/generator');

	const fs = require('fs');
	try{
		const ast = babylon.parse(input, {
			sourceType : 'script',
			plugins : ['jsx', 'flow']
		});

		// console.log(ast['program']); // This is the AST JSON object

		traverse.default(ast, {
			enter(path) {
				// console.log(path.node.type);
				if (path.node.type === "VariableDeclarator") {
				}
			}
		});

		var newCode = generator.default(ast);
		newCode['code'] = 'function run(){\n' + newCode['code'];
		newCode['code'] += '\n}';
		newCode['code'] += '\n\nmodule.exports = {run};';

		// synchronous writing in javascript file (output.js)
		fs.writeFileSync('output.js', newCode['code'], (err) =>{ if(err) throw err; });

		return ast;
	} catch(err){
		console.log("[" + err["message"] + "]");
		return null;
	}
}

module.exports = { generate };
