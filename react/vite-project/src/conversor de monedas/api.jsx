import React, { useState, useEffect } from 'react';
import CurrencySelect from './convercion';


const apiUrl = 'https://v6.exchangerate-api.com/v6/d565043de8e12dd3cb467f1e/latest/USD';

function CurrencyConverter() {
  const [conversionRates, setConversionRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          setConversionRates(data.conversion_rates);
        } else {
          console.error('Error al obtener datos:', data.error);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud fetch:', error);
      });
  }, []);

  const handleFromCurrencyChange = (value) => {
    setFromCurrency(value);
  };

  const handleToCurrencyChange = (value) => {
    setToCurrency(value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleConvert = () => {
    const rate = conversionRates[toCurrency];
    const convertedValue = (amount * rate).toFixed(2);
    setConvertedAmount(convertedValue);
  };

  return (
    <div className="converter">
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="input-field"
        />
        <CurrencySelect
          currencies={Object.keys(conversionRates)}
          selectedCurrency={fromCurrency}
          onSelectCurrency={handleFromCurrencyChange}
        />
      </div>
      <div className="equals">=</div>
      <div className="input-group">
        <input
          type="text"
          value={convertedAmount === null ? '' : convertedAmount}
          readOnly
          className="input-field"
        />
        <CurrencySelect
          currencies={Object.keys(conversionRates)}
          selectedCurrency={toCurrency}
          onSelectCurrency={handleToCurrencyChange}
        />
      </div>
      <button onClick={handleConvert} className="convert-btn">
        Convertir
      </button>
    </div>
  );
}

export default CurrencyConverter;