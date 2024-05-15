import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { validateExpression } from '../services/expressionValidator';

function Calculator(){
  const [expression, setExpression] = useState('');


  useEffect(() => {
    const { result, errorMessage } = validateExpression(expression);
    console.log(result);
  }, [expression])

  return(
    <Grid>
      <TextField
        label="Example: A + B"
        variant="outlined"
        onChange={(event) => setExpression(event.target.value)}/>
    </Grid>
  )
}

export default Calculator;