var code;

function generalCleaning(input){
    input = input.toLowerCase();

    // whole cleaning
    input = cleanComments(input);

    code = input.split("\n");
    for(var i = 0; i < code.length; i++){
        perLineCleaning(i);
    }

    return code.join("\n");
}

function perLineCleaning(index){
    cleanOperators(index);

    if(code[index].includes('procedure') && !code[index].includes('(') && !code[index].includes(')'))
        cleanProcedure(index);

    else if((code[index].includes('readln') || code[index].includes('read')) && !code[index].includes('(') && !code[index].includes(')'))
        cleanRead(index);

    else if((code[index].includes('writeln') || code[index].includes('write')) && !code[index].includes('(') && !code[index].includes(')'))
        cleanWrite(index);
}

function cleanComments(input){
    input = input.replace(/\([ ]*\*.*?\*[ ]*\)/g, "");
    input = input.replace(/{.*?}/g, "");
    input = input.replace(/\/\/[ ]*.*/g, "");
    return input;
}

function cleanRead(index){
    code[index] = code[index].replace(/;/, "(v);");
}

function cleanWrite(index){
    code[index] = code[index].replace(/;/, "();");
}

function cleanProcedure(index){
    code[index] = code[index].replace(/;/, "();")
}

function cleanOperators(index){
    code[index] = code[index].replace(/\+/g, " + ");
    code[index] = code[index].replace(/\-/g, " - ");
    code[index] = code[index].replace(/\*/g, "*");
    code[index] = code[index].replace(/\//g, " / ");
    code[index] = code[index].replace(/\%/g, " % ");

    code[index] = code[index].replace(/\+ =/g, "+=");
    code[index] = code[index].replace(/\- =/g, "-=");
    code[index] = code[index].replace(/\* =/g, "*=");
    code[index] = code[index].replace(/\/ =/g, "/=");
    code[index] = code[index].replace(/\%/g, "%=");

    code[index] = code[index].replace(/\+ \+/g, "++");
    code[index] = code[index].replace(/\- \-/g, "--");

    code[index] = code[index].replace(/  /g, " ");
}

module.exports = { generalCleaning };
