"use client";
import React from 'react';
import useHttpRequest from '../hooks/useHttpRequest';
import { parseHtmlToObject } from '../services/dataParser';
import Calculator from '../components/calculator';
import Stack from '@mui/material/Stack';

export default function Home() {
  const { data, loading } = useHttpRequest('http://localhost:3000/export');
  if (loading) return <div>Loading...</div>;
  
  const parsedData = parseHtmlToObject(data);
  
  if(data)
    return (
      <>
        <h1>Ledger Calculator</h1>
        <hr />
        <Stack
          direction={{ xs: 'column', sm: 'row'}}
          spacing={{ xs: 3, sm: 12}}
        >
          <div>
              <div dangerouslySetInnerHTML={{ __html: data }} />
          </div>
          <div>
              <Calculator itemsData={parsedData}/>
          </div>
        </Stack>
      </>
    );
}
