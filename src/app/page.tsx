"use client";
import React from 'react';
import useHttpRequest from '../hooks/useHttpRequest';
import { parseHtmlToObject } from '../services/dataParser';
import Calculator from '../components/calculator';
import Grid from '@mui/material/Grid';

export default function Home() {
  const { data, loading } = useHttpRequest('http://localhost:3000/export');
  if (loading) return <div>Loading...</div>;
  
  const parsedData = parseHtmlToObject(data);
  
  if(data)
    return (
      <>
        <h1>Ledger Calculator</h1>
        <hr />
        <Grid container>
          <Grid item xs={12} sm={2}>
              <div dangerouslySetInnerHTML={{ __html: data }} />
          </Grid>
          <Grid item xs={12} sm={4}>
              <Calculator />
          </Grid>
        </Grid>
      </>
    );
}
