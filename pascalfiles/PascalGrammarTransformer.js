var jscode = [];
var data_types = {};
var function_returns = null;
var fnames = [];

function evaluate(input){

    input = preCleaning(input); // general cleaning the whole code string
    jscode = input.split("\n");

    for(var i = 0; i < jscode.length; i++){
        perLineCleaning(i);
        // console.log(jscode[i]);
    }

    return jscode.join('\n').replace(/\/\/ begin/g, "");
}

function preCleaning(input){
    // clean to lower case
    input = input.toLowerCase();

    // clean whitespaces (\t)
    input = input.replace(/\r/g, "");
    input = input.replace(/(;)+/g, ";");
    // input = input.replace(/\t/g, "");

    // clean the comments
    input = input.replace(/\{/g, "/*");
    input = input.replace(/\}/g, "*/");
    input = input.replace(/\([ ]*\*/g, "/*");
    input = input.replace(/\*[ ]*\)/g, "*/");

    // clean assignment & relational symbols
    input = input.replace(/:=/g, "=");
    input = input.replace(/<>/g, "!=");

    // clean braces for blocks
    input = input.replace(/\bbegin(;)?\b/gi, "// begin");
    input = input.replace(/\bend(;)?\b/gi, "}");
    input = input.replace(/\}[ ]*\./g, "");
    input = input.replace(/\}\;/g, "}");

    // clean procedure keyword
    input = input.replace(/procedure/gi, "function");

    // clean keywords
    input = input.replace(/then/gi, "");
    input = input.replace(/writeln/gi, "console.log");
    input = input.replace(/write/gi, "process.stdout.write");
    input = input.replace(/readln/gi, "scanf");
    input = input.replace(/read/gi, "scanf");
    input = input.replace(/for/gi, "for(");
    input = input.replace(/\bmod\b/gi, "%");
    input = input.replace(/\bdiv\b/gi, "/");

    // clean program (comment it out)
    input = input.replace(/program/i, "// program");
    input = input.replace(/uses/i, "// uses");

    return input;
}

function perLineCleaning(index){

    // function returns
    if(jscode[index].includes(function_returns) && function_returns != null && jscode[index].includes("=") && jscode[index].indexOf(function_returns) < jscode[index].indexOf("=")){
        jscode[index] = jscode[index].replace(function_returns, "return");
        jscode[index] = jscode[index].replace("=", " ");
        if(!jscode[index].includes(";"))
            jscode[index] += ";";
    }

    // function or procedure call
    for(let i = 0; i < fnames.length; i++){
        if(jscode[index].replace(/ /g, "").indexOf(fnames[i]) == 0 && !jscode[index].includes("(")){
            jscode[index] = fnames[i] + "();";
            break;
        }
    }

    if(jscode[index].includes("function ") && jscode[index].replace(/ /g, "").indexOf("function") == 0){
        //jscode[index] = jscode[index].replace(/\;/g, "{");
        cleanFunction(index);
    }

    else if(jscode[index].includes("console.log") || jscode[index].includes("process.stdout.write")){
        cleanWrite(index);
    }

    else if(jscode[index].includes("if")){
        jscode[index] += ")";
        if(jscode[index + 1].includes("begin"))
            jscode[index] += " {";
        cleanIf(index);
    }

    else if(jscode[index].includes("else")){
        if(jscode[index + 1].includes("begin"))
            jscode[index] += " {";
    }

    else if(jscode[index].includes("var")){
        if(jscode[index].replace(/ /g, "").length >= 5)
            cleanVariable(index);
        else jscode[index] = "";
    }

    else if(jscode[index].includes("const")){
        if(jscode[index].replace(/ /g, "").length >= 9)
            cleanConstant(index);
        else jscode[index] = "";
    }

    else if(jscode[index].includes("for")){
        cleanFor(index);
    }

    else if(jscode[index].includes("while")){
        cleanWhile(index);
    }

    else if(jscode[index].includes("scanf")){
        cleanRead(index);
    }

    else if(jscode[index].includes(":") && (jscode[index].includes("integer") || jscode[index].includes("boolean") || jscode[index].includes("string") || jscode[index].includes("char"))){
        jscode[index] = "var " + jscode[index];
        cleanVariable(index);
    }
}

function cleanIf(index){
    var ifIndex = jscode[index].indexOf("if");
    var temp = jscode[index].replace(/ /g, "");

    // if(ifIndex + 2 != "(")
    jscode[index] = jscode[index].replace("if", "if(");

    jscode[index] = jscode[index].replace(/=/g, '==');
    jscode[index] = jscode[index].replace(/<==/g, '<=');
    jscode[index] = jscode[index].replace(/>==/g, '>=');
    jscode[index] = jscode[index].replace(/!==/g, '!=');
    jscode[index] = jscode[index].replace(/\bnot\b/gi, "!");
    jscode[index] = jscode[index].replace(/\band\b/gi, "&&");
    jscode[index] = jscode[index].replace(/\bor\b/gi, "||");

    return true;
}

function cleanWrite(index){
    jscode[index] = jscode[index].replace(/,/g, "+");
    jscode[index] = jscode[index].replace(/\bnot\b/gi, "!");
    jscode[index] = jscode[index].replace(/\band\b/gi, "&&");
    jscode[index] = jscode[index].replace(/\bor\b/gi, "||");
}

function cleanRead(index){
    var markings = [];
    markings.push(jscode[index].indexOf('('));
    markings.push(jscode[index].indexOf(')'));

    var param = jscode[index].substring(markings[0] + 1, markings[1]);
    param = param.replace(/ /g, '').split(',');

    jscode[index] = "";
    for(var i = 0; i < param.length; i++){
        jscode[index] += param[i] + " = scanf('" + getType(param[i]) + "');";
    }

    function getType(param){
        if(data_types[param] == 'integer')
            return '%d';

        else return '%s';
    }
}

function cleanVariable(index){
    var begin = jscode[index].indexOf('var');
    var pArray = jscode[index].substring(begin + 4, jscode[index].length - 1).replace(/ /, "").split(":");
    var pList = [];

    for(var i = 0; i < pArray.length; i++){
        if(i % 2 == 0){
            var temp = pArray[i].split(",");

            for(var j = 0; j < temp.length; j++){
                // pList.add(pArray[i+1] + "_" + temp[j]);
                if(pArray[i+1].includes('array')){
                    pList.push(temp[j] + ' = ' + cleanArray(pArray[i+1]));
                }

                else{
                    data_types[temp[j]] = pArray[i+1];
                    pList.push(temp[j]);
                }
            }

        }
    }

    jscode[index] = "var ";
    for(var i = 0; i < pList.length; i++){
        jscode[index] += pList[i];
        if(i < pList.length - 1)
            jscode[index] += ", ";
    }

    function cleanArray(type){
        let markings = [];

        type = type.replace(/ /g, '');
        markings.push(type.indexOf('['));
        markings.push(type.indexOf(']'));

        let arr = type.substring(markings[0] + 1, markings[1]).split('..');
        return 'new Array(' + (parseInt(arr[1]) - parseInt(arr[0]) + 2) + ').fill(0)';
        // return '[]';
    }

    jscode[index] += ";";

    return true;
}

function cleanConstant(index){
    var begin = jscode[index].indexOf('const');
    var pArray = jscode[index].substring(begin + 6, jscode[index].length - 1).replace(/ /, "").split(":");
    var pList = [];

    for(var i = 0; i < pArray.length; i++){
        if(i % 2 == 0){
            var temp = pArray[i].split(",");

            for(var j = 0; j < temp.length; j++){
                // pList.add(pArray[i+1] + "_" + temp[j]);
                pList.push(temp[j]);
            }

        }
    }

    jscode[index] = "const ";
    for(var i = 0; i < pList.length; i++){
        jscode[index] += pList[i];
        if(i < pList.length - 1)
            jscode[index] += ", ";
    }

    jscode[index] += ";";

    return true;
}

function cleanFunction(index){
    var markings = [];

    markings.push(jscode[index].indexOf('('));
    markings.push(jscode[index].indexOf(')'));

    var parameters = jscode[index].substring(markings[0] + 1, markings[1]);
    parameters = parameters.replace(/ /g, "");
    parameters = parameters.replace(/\{/g, ":");
    parameters = parameters.replace(/;/g, ":");

    var pArray = parameters.split(":");
    var pList = [];

    for(var i = 0; i < pArray.length; i++){
        if(i % 2 == 0){
            var temp = pArray[i].split(",");

            for(var j = 0; j < temp.length; j++){
                // pList.add(pArray[i+1] + "_" + temp[j]);
                pList.push(temp[j]);
            }
        }
    }

    let function_mark = jscode[index].indexOf("function");
    let function_name = jscode[index].substring(function_mark, jscode[index].length);
    function_name = function_name.replace(/\(/, " (");
    function_name = function_name.split(" ")[1];

    // check if it has a return type
    if(jscode[index].substring(markings[1], jscode[index].length).includes(":")){
        function_returns = function_name;
    }

    fnames.push(function_name);

    // rewriting the jscode
    jscode[index] = jscode[index].substring(0, markings[0] + 1);
    for(var i = 0; i < pList.length; i++){
        jscode[index] += pList[i];
        if(i < pList.length - 1)
            jscode[index] += ", ";
    }

    jscode[index] += ") {";

    return true;
}

function cleanFor(index){
    var varUsed = jscode[index].replace(/=/g, ' = ');
    varUsed = varUsed.substring(varUsed.indexOf("for"), varUsed.length);
    varUsed = varUsed.split(" ")[1];

    jscode[index] = jscode[index].replace(/\bto\b/gi, '; ' + varUsed + ' <= ');
    jscode[index] = jscode[index].replace(/\bdownto\b/gi, '; ' + varUsed + ' >= ');

    if(jscode[index].includes(">="))
        jscode[index] = jscode[index].replace(/do/gi, '; ' + varUsed + "--)");

    else jscode[index] = jscode[index].replace(/do/gi, '; ' + varUsed + "++)");


    if(jscode[index + 1].includes("begin"))
        jscode[index] += " {";

    else if(jscode[index + 1].replace(/ /g, "") == '' && jscode[index + 2].includes("begin"))
        jscode[index] += " {";

    return true;
}

function cleanWhile(index){
    jscode[index] = jscode[index].replace(/while/gi, "while(");
    jscode[index] = jscode[index].replace(/do/gi, ") {");
    return true;
}

module.exports = { evaluate };
