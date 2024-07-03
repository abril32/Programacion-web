import React from 'react';

function CurrencySelect({ currencies, selectedCurrency, onSelectCurrency }) {
  const handleChange = (event) => {
    onSelectCurrency(event.target.value);
  };

  return (
    <select value={selectedCurrency} onChange={handleChange} className="select-currency">
      {currencies.map(currency => (
        <option key={currency} value={currency}>{currency}</option>
      ))}
    </select>
  );
}

export default CurrencySelect;