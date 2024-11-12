import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import React from 'react';

export function App() {
  return (
    <>
    <BrowserRouter >
      <Router />
    </BrowserRouter>
    </>
  );
}

