const expressionValidator = require('../../services/expressionValidator');
const validateExpressionFn = expressionValidator.validateExpression;

test('validateExpressionFn returns that the expression is valid when it is correct', () => {
  const expression = "A+B"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(true);
  expect(responseObject.errorMessage).toBe('');
});

test('validateExpressionFn returns that the expression is valid when it has only one letter', () => {
  const expression = "A"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(true);
  expect(responseObject.errorMessage).toBe('');
});


test('validateExpressionFn returns that the expression is NOT valid when it has two operands together', () => {
  const expression = "AB"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Two operands without an operator in between.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has two operators together', () => {
  const expression = "A++"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. There are two operators together.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has whitespaces', () => {
  const expression = "A + B"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Please do not include whitespaces.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has invalid letters', () => {
  const expression = "A+C"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Use valid operands and operators.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has invalid operators', () => {
  const expression = "A&B"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Use valid operands and operators.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has only one operand and one operator', () => {
  const expression = "A+"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Use either one operand without operator or two operands.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has invalid operators', () => {
  const expression = "A&B"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Use valid operands and operators.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has only one operator with no operands', () => {
  const expression = "+"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Use at least one operand.');
});

test('validateExpressionFn returns that the expression is NOT valid when it has more than two operands', () => {
  const expression = "A+B+B"
  const responseObject = validateExpressionFn(expression);
  expect(responseObject.result).toBe(false);
  expect(responseObject.errorMessage).toBe('Entry invalid. Please do not use more than two operands.');
});