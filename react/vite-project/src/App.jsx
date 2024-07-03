import React, { useState } from 'react';
import CurrencyConverter from './conversor de monedas/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conversor de Moneda</h1>
      </header>
      <CurrencyConverter />
    </div>
  );
}

export default App;
