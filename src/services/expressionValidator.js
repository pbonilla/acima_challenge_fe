import { OPERATORS, OPERANDS } from '../constants';

const escapedOperators = OPERATORS.map((operator) => `\\${operator}`);

function validationResult(result, errorMessage = ''){
  return {result, errorMessage };
}

function hasInvalidEntries(expression){
  const regexPattern = new RegExp(`[^((${OPERANDS.join("|")})|(${escapedOperators.join("|")}))]`, 'gi');
  return expression.match(regexPattern);
}

function hasWhiteSpaces(expression){
  const regexPattern = new RegExp(/\s+/, 'gi');
  return expression.match(regexPattern);
}

function hasMoreThanOneOperandTogether(expression){
  const regexPattern = new RegExp(`(${OPERANDS.join('|')})(${OPERANDS.join('|')})`, 'gi');
  return expression.match(regexPattern);
}

function hasMoreThanOneOperatorTogether(expression){
  const regexPattern = new RegExp(`(${escapedOperators.join("|")})(${escapedOperators.join("|")})`, 'gi');
  return expression.match(regexPattern);
}

function hasMoreThanTwoOperands(expression){
  return expression.length > 3;
}

function hasOnlyOneOperandAndOperator(expression){
  return expression.length == 2;
}

function hasOnlyOneOperator(expression){
  const regexPattern = new RegExp(`${escapedOperators.join('|')}`, 'gi');
  return expression.length == 1 && expression.match(regexPattern);
}

export function validateExpression(expression){
  if(expression.length === 0) return validationResult(true);

  if(hasWhiteSpaces(expression)){
    return validationResult(false, 'Entry invalid. Please do not include whitespaces.')
  }

  if(hasInvalidEntries(expression)){
    return validationResult(false, 'Entry invalid. Use valid operands and operators.')
  }
  
  if(hasMoreThanOneOperandTogether(expression)){
    return validationResult(false, 'Entry invalid. Two operands without an operator in between.')
  }

  if(hasMoreThanOneOperatorTogether(expression)){
    return validationResult(false, 'Entry invalid. There are two operators together.')
  }

  if(hasMoreThanTwoOperands(expression)){
    return validationResult(false, 'Entry invalid. Please do not use more than two operands.')
  }

  if(hasOnlyOneOperandAndOperator(expression)){
    return validationResult(false, 'Entry invalid. Use either one operand without operator or two operands.')
  }

  if(hasOnlyOneOperator(expression)){
    return validationResult(false, 'Entry invalid. Use at least one operand.')
  }

  return validationResult(true);
}
