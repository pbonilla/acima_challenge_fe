import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { validateExpression } from '../services/expressionValidator';
import Stack from '@mui/material/Stack';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function totalByDataSet(dataSet, operator, initialValue = 0){
  return dataSet.reduce((res, item) => {
    res = eval(`${item.price}${operator}${res}`);
    return res;
  }, initialValue)
}

function calculateResult(itemsData, expression){
  const expressionParts = expression.split('');
  if(expressionParts.length === 1){
    const operand = expressionParts[0].toUpperCase();
    return totalByDataSet(itemsData[operand], '+');
  } 
  else{
    // expresessionParts will have the format of [operand1, operator, operand2]
    const operand1 = expressionParts[0].toUpperCase();
    const operand2 = expressionParts[2].toUpperCase();
    const operator = expressionParts[1]
    let totalOperand1 = 0;
    let totalOperand2 = 0;
    switch(operator){
      case '+':
      case '-':
        totalOperand1 = totalByDataSet(itemsData[operand1], '+')
        totalOperand2 = totalByDataSet(itemsData[operand2], '+')
        return eval(`${totalOperand1}${operator}${totalOperand2}`);
      case '*':
      case '/':
        totalOperand1 = totalByDataSet(itemsData[operand1], operator, 1)
        totalOperand2 = totalByDataSet(itemsData[operand2], operator, 1)
        return eval(`${totalOperand1}${operator}${totalOperand2}`);
    }
  }  
}

function Calculator({ itemsData }){
  const [expression, setExpression] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isExpressionValid, setIsExpressionValid] = useState(true);
  const [result, setResult] = useState(0.0);

  useEffect(() => {
    const validationResult = validateExpression(expression);
    setIsExpressionValid(validationResult.result);
    setErrorMessage(validationResult.errorMessage);
    setResult(0.0);
  }, [expression])

  return(
    <Stack spacing={2} style={{ width: '320px'}}>
      <span>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">
            ${result}
          </Typography>
        </ThemeProvider>
      </span>
      <TextField
        label="Example: A + B"
        variant="outlined"
        onChange={(event) => setExpression(event.target.value)}
        error={!isExpressionValid}
        helperText={errorMessage}
      />
      <Button
        variant="contained"
        size="medium"
        onClick={() => setResult(calculateResult(itemsData, expression))}
        disabled={!isExpressionValid}
      >
        Calculate
      </Button>
    </Stack>
  )
}

export default Calculator;