import React, { useState } from 'react';
import CurrencyConverter from './conversor de monedas/api';
import CharacterList from './componentes/rick /rickymorty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick y Morty</h1>
      </header>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
