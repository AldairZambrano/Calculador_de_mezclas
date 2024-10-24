import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [calculatedValue, setCalculatedValue] = useState(null);
  const [calculatedValue08, setCalculatedValue08] = useState(null);

  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const editItem = (index) => {
    const newValue = prompt('Edita el valor:', items[index]);
    if (newValue) {
      const newItems = [...items];
      newItems[index] = newValue;
      setItems(newItems);
    }
  };

  const calculateValue = (value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const result = numericValue * 0.18;
      setCalculatedValue(result);
      setCalculatedValue08(result * 0.84); // Multiplicamos el resultado por 0.08
    }
  };

  return (
    <div>
      <h1>Mi Aplicación</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa un valor"
      />
      <button onClick={addItem}>Agregar</button>

      <div>
        <h2>Valores Agregados:</h2>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={() => deleteItem(index)}>Borrar</button>
            <button onClick={() => editItem(index)}>Editar</button>
            <button onClick={() => calculateValue(item)}>Calcular</button>
          </div>
        ))}
      </div>

      {calculatedValue !== null && (
        <div>
          <h2>Valor Calculado (x0.18):</h2>
          <p>{calculatedValue}</p>
        </div>
      )}

      {calculatedValue08 !== null && (
        <div>
          <h2>Valor Calculado (resultado x0.84):</h2>
          <p>{calculatedValue08}</p>
        </div>
      )}
    </div>
  );
}

export default App;
