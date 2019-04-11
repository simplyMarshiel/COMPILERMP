// Generated from PascalGrammar.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete listener for a parse tree produced by PascalGrammarParser.
function PascalGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PascalGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PascalGrammarListener.prototype.constructor = PascalGrammarListener;

// Enter a parse tree produced by PascalGrammarParser#program.
PascalGrammarListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#program.
PascalGrammarListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#programHeading.
PascalGrammarListener.prototype.enterProgramHeading = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#programHeading.
PascalGrammarListener.prototype.exitProgramHeading = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#identifier.
PascalGrammarListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#identifier.
PascalGrammarListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#block.
PascalGrammarListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#block.
PascalGrammarListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#usesUnitsPart.
PascalGrammarListener.prototype.enterUsesUnitsPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#usesUnitsPart.
PascalGrammarListener.prototype.exitUsesUnitsPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#labelDeclarationPart.
PascalGrammarListener.prototype.enterLabelDeclarationPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#labelDeclarationPart.
PascalGrammarListener.prototype.exitLabelDeclarationPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#label.
PascalGrammarListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#label.
PascalGrammarListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#constantDefinitionPart.
PascalGrammarListener.prototype.enterConstantDefinitionPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#constantDefinitionPart.
PascalGrammarListener.prototype.exitConstantDefinitionPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#constantDefinition.
PascalGrammarListener.prototype.enterConstantDefinition = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#constantDefinition.
PascalGrammarListener.prototype.exitConstantDefinition = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#constantChr.
PascalGrammarListener.prototype.enterConstantChr = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#constantChr.
PascalGrammarListener.prototype.exitConstantChr = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#constant.
PascalGrammarListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#constant.
PascalGrammarListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#unsignedNumber.
PascalGrammarListener.prototype.enterUnsignedNumber = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#unsignedNumber.
PascalGrammarListener.prototype.exitUnsignedNumber = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#unsignedInteger.
PascalGrammarListener.prototype.enterUnsignedInteger = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#unsignedInteger.
PascalGrammarListener.prototype.exitUnsignedInteger = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#unsignedReal.
PascalGrammarListener.prototype.enterUnsignedReal = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#unsignedReal.
PascalGrammarListener.prototype.exitUnsignedReal = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#sign.
PascalGrammarListener.prototype.enterSign = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#sign.
PascalGrammarListener.prototype.exitSign = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#bool.
PascalGrammarListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#bool.
PascalGrammarListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#string.
PascalGrammarListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#string.
PascalGrammarListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#typeDefinitionPart.
PascalGrammarListener.prototype.enterTypeDefinitionPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#typeDefinitionPart.
PascalGrammarListener.prototype.exitTypeDefinitionPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#typeDefinition.
PascalGrammarListener.prototype.enterTypeDefinition = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#typeDefinition.
PascalGrammarListener.prototype.exitTypeDefinition = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#functionType.
PascalGrammarListener.prototype.enterFunctionType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#functionType.
PascalGrammarListener.prototype.exitFunctionType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#procedureType.
PascalGrammarListener.prototype.enterProcedureType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#procedureType.
PascalGrammarListener.prototype.exitProcedureType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#type.
PascalGrammarListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#type.
PascalGrammarListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#simpleType.
PascalGrammarListener.prototype.enterSimpleType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#simpleType.
PascalGrammarListener.prototype.exitSimpleType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#scalarType.
PascalGrammarListener.prototype.enterScalarType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#scalarType.
PascalGrammarListener.prototype.exitScalarType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#subrangeType.
PascalGrammarListener.prototype.enterSubrangeType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#subrangeType.
PascalGrammarListener.prototype.exitSubrangeType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#typeIdentifier.
PascalGrammarListener.prototype.enterTypeIdentifier = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#typeIdentifier.
PascalGrammarListener.prototype.exitTypeIdentifier = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#structuredType.
PascalGrammarListener.prototype.enterStructuredType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#structuredType.
PascalGrammarListener.prototype.exitStructuredType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#unpackedStructuredType.
PascalGrammarListener.prototype.enterUnpackedStructuredType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#unpackedStructuredType.
PascalGrammarListener.prototype.exitUnpackedStructuredType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#stringtype.
PascalGrammarListener.prototype.enterStringtype = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#stringtype.
PascalGrammarListener.prototype.exitStringtype = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#arrayType.
PascalGrammarListener.prototype.enterArrayType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#arrayType.
PascalGrammarListener.prototype.exitArrayType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#typeList.
PascalGrammarListener.prototype.enterTypeList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#typeList.
PascalGrammarListener.prototype.exitTypeList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#indexType.
PascalGrammarListener.prototype.enterIndexType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#indexType.
PascalGrammarListener.prototype.exitIndexType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#componentType.
PascalGrammarListener.prototype.enterComponentType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#componentType.
PascalGrammarListener.prototype.exitComponentType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#recordType.
PascalGrammarListener.prototype.enterRecordType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#recordType.
PascalGrammarListener.prototype.exitRecordType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#fieldList.
PascalGrammarListener.prototype.enterFieldList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#fieldList.
PascalGrammarListener.prototype.exitFieldList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#fixedPart.
PascalGrammarListener.prototype.enterFixedPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#fixedPart.
PascalGrammarListener.prototype.exitFixedPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#recordSection.
PascalGrammarListener.prototype.enterRecordSection = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#recordSection.
PascalGrammarListener.prototype.exitRecordSection = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#variantPart.
PascalGrammarListener.prototype.enterVariantPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#variantPart.
PascalGrammarListener.prototype.exitVariantPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#tag.
PascalGrammarListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#tag.
PascalGrammarListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#variant.
PascalGrammarListener.prototype.enterVariant = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#variant.
PascalGrammarListener.prototype.exitVariant = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#setType.
PascalGrammarListener.prototype.enterSetType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#setType.
PascalGrammarListener.prototype.exitSetType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#baseType.
PascalGrammarListener.prototype.enterBaseType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#baseType.
PascalGrammarListener.prototype.exitBaseType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#fileType.
PascalGrammarListener.prototype.enterFileType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#fileType.
PascalGrammarListener.prototype.exitFileType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#pointerType.
PascalGrammarListener.prototype.enterPointerType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#pointerType.
PascalGrammarListener.prototype.exitPointerType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#variableDeclarationPart.
PascalGrammarListener.prototype.enterVariableDeclarationPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#variableDeclarationPart.
PascalGrammarListener.prototype.exitVariableDeclarationPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#variableDeclaration.
PascalGrammarListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#variableDeclaration.
PascalGrammarListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#procedureAndFunctionDeclarationPart.
PascalGrammarListener.prototype.enterProcedureAndFunctionDeclarationPart = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#procedureAndFunctionDeclarationPart.
PascalGrammarListener.prototype.exitProcedureAndFunctionDeclarationPart = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#procedureOrFunctionDeclaration.
PascalGrammarListener.prototype.enterProcedureOrFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#procedureOrFunctionDeclaration.
PascalGrammarListener.prototype.exitProcedureOrFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#procedureDeclaration.
PascalGrammarListener.prototype.enterProcedureDeclaration = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#procedureDeclaration.
PascalGrammarListener.prototype.exitProcedureDeclaration = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#formalParameterList.
PascalGrammarListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#formalParameterList.
PascalGrammarListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#formalParameterSection.
PascalGrammarListener.prototype.enterFormalParameterSection = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#formalParameterSection.
PascalGrammarListener.prototype.exitFormalParameterSection = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#parameterGroup.
PascalGrammarListener.prototype.enterParameterGroup = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#parameterGroup.
PascalGrammarListener.prototype.exitParameterGroup = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#identifierList.
PascalGrammarListener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#identifierList.
PascalGrammarListener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#constList.
PascalGrammarListener.prototype.enterConstList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#constList.
PascalGrammarListener.prototype.exitConstList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#functionDeclaration.
PascalGrammarListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#functionDeclaration.
PascalGrammarListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#resultType.
PascalGrammarListener.prototype.enterResultType = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#resultType.
PascalGrammarListener.prototype.exitResultType = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#statement.
PascalGrammarListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#statement.
PascalGrammarListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#unlabelledStatement.
PascalGrammarListener.prototype.enterUnlabelledStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#unlabelledStatement.
PascalGrammarListener.prototype.exitUnlabelledStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#simpleStatement.
PascalGrammarListener.prototype.enterSimpleStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#simpleStatement.
PascalGrammarListener.prototype.exitSimpleStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#ioStatement.
PascalGrammarListener.prototype.enterIoStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#ioStatement.
PascalGrammarListener.prototype.exitIoStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#assignmentStatement.
PascalGrammarListener.prototype.enterAssignmentStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#assignmentStatement.
PascalGrammarListener.prototype.exitAssignmentStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#variable.
PascalGrammarListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#variable.
PascalGrammarListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#expression.
PascalGrammarListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#expression.
PascalGrammarListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#relationaloperator.
PascalGrammarListener.prototype.enterRelationaloperator = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#relationaloperator.
PascalGrammarListener.prototype.exitRelationaloperator = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#simpleExpression.
PascalGrammarListener.prototype.enterSimpleExpression = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#simpleExpression.
PascalGrammarListener.prototype.exitSimpleExpression = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#additiveoperator.
PascalGrammarListener.prototype.enterAdditiveoperator = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#additiveoperator.
PascalGrammarListener.prototype.exitAdditiveoperator = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#term.
PascalGrammarListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#term.
PascalGrammarListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#multiplicativeoperator.
PascalGrammarListener.prototype.enterMultiplicativeoperator = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#multiplicativeoperator.
PascalGrammarListener.prototype.exitMultiplicativeoperator = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#signedFactor.
PascalGrammarListener.prototype.enterSignedFactor = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#signedFactor.
PascalGrammarListener.prototype.exitSignedFactor = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#factor.
PascalGrammarListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#factor.
PascalGrammarListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#unsignedConstant.
PascalGrammarListener.prototype.enterUnsignedConstant = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#unsignedConstant.
PascalGrammarListener.prototype.exitUnsignedConstant = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#functionDesignator.
PascalGrammarListener.prototype.enterFunctionDesignator = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#functionDesignator.
PascalGrammarListener.prototype.exitFunctionDesignator = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#parameterList.
PascalGrammarListener.prototype.enterParameterList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#parameterList.
PascalGrammarListener.prototype.exitParameterList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#set.
PascalGrammarListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#set.
PascalGrammarListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#elementList.
PascalGrammarListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#elementList.
PascalGrammarListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#element.
PascalGrammarListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#element.
PascalGrammarListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#procedureStatement.
PascalGrammarListener.prototype.enterProcedureStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#procedureStatement.
PascalGrammarListener.prototype.exitProcedureStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#actualParameter.
PascalGrammarListener.prototype.enterActualParameter = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#actualParameter.
PascalGrammarListener.prototype.exitActualParameter = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#parameterwidth.
PascalGrammarListener.prototype.enterParameterwidth = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#parameterwidth.
PascalGrammarListener.prototype.exitParameterwidth = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#gotoStatement.
PascalGrammarListener.prototype.enterGotoStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#gotoStatement.
PascalGrammarListener.prototype.exitGotoStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#emptyStatement.
PascalGrammarListener.prototype.enterEmptyStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#emptyStatement.
PascalGrammarListener.prototype.exitEmptyStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#empty.
PascalGrammarListener.prototype.enterEmpty = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#empty.
PascalGrammarListener.prototype.exitEmpty = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#structuredStatement.
PascalGrammarListener.prototype.enterStructuredStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#structuredStatement.
PascalGrammarListener.prototype.exitStructuredStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#compoundStatement.
PascalGrammarListener.prototype.enterCompoundStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#compoundStatement.
PascalGrammarListener.prototype.exitCompoundStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#statements.
PascalGrammarListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#statements.
PascalGrammarListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#conditionalStatement.
PascalGrammarListener.prototype.enterConditionalStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#conditionalStatement.
PascalGrammarListener.prototype.exitConditionalStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#ifStatement.
PascalGrammarListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#ifStatement.
PascalGrammarListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#caseStatement.
PascalGrammarListener.prototype.enterCaseStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#caseStatement.
PascalGrammarListener.prototype.exitCaseStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#caseListElement.
PascalGrammarListener.prototype.enterCaseListElement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#caseListElement.
PascalGrammarListener.prototype.exitCaseListElement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#repetetiveStatement.
PascalGrammarListener.prototype.enterRepetetiveStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#repetetiveStatement.
PascalGrammarListener.prototype.exitRepetetiveStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#whileStatement.
PascalGrammarListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#whileStatement.
PascalGrammarListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#repeatStatement.
PascalGrammarListener.prototype.enterRepeatStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#repeatStatement.
PascalGrammarListener.prototype.exitRepeatStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#forStatement.
PascalGrammarListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#forStatement.
PascalGrammarListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#forList.
PascalGrammarListener.prototype.enterForList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#forList.
PascalGrammarListener.prototype.exitForList = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#initialValue.
PascalGrammarListener.prototype.enterInitialValue = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#initialValue.
PascalGrammarListener.prototype.exitInitialValue = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#finalValue.
PascalGrammarListener.prototype.enterFinalValue = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#finalValue.
PascalGrammarListener.prototype.exitFinalValue = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#withStatement.
PascalGrammarListener.prototype.enterWithStatement = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#withStatement.
PascalGrammarListener.prototype.exitWithStatement = function(ctx) {
};


// Enter a parse tree produced by PascalGrammarParser#recordVariableList.
PascalGrammarListener.prototype.enterRecordVariableList = function(ctx) {
};

// Exit a parse tree produced by PascalGrammarParser#recordVariableList.
PascalGrammarListener.prototype.exitRecordVariableList = function(ctx) {
};



exports.PascalGrammarListener = PascalGrammarListener;
