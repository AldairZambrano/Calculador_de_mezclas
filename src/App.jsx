import React, { useState } from 'react';
import {Button} from "@mui/material"
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  //litros de agua de la alberca
  const [calculatedValue, setCalculatedValue] = useState(null);
  //mezcla de la bomba 20 litros
  const [ValueBomba, setValueBomba] = useState(null);
  //cc de graduarte
  const [ValueGraduarte, setValueGraduarte] = useState(null);
  //Gramos de ryzup
  const [ValueRyzup, setValueRyzup] = useState(null);

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
      //total de litros
      const result = numericValue * 0.18;
      setCalculatedValue(result);
      //meszcla de agua y graduerto
      setValueGraduarte(result * 0.84);
       // mezcla de bomba
       const result2 = numericValue * 0.02;
       setValueBomba(result2)
       //gramos de ryzup
       setValueRyzup(result2 * 2.5)
    }
  };

  return (
    <div>
       <Button variant="outlined" color="error">
  Error
</Button>
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
          <h2>Litros de agua alberca:</h2>
          <p>{calculatedValue}</p>
        </div>
      )}

      {ValueGraduarte !== null && (
        <div>
          <h2>Cantida de Graduarte:</h2>
          <p>{ValueGraduarte}</p>
        </div>
      )}
       {ValueBomba !== null && (
        <div>
          <h2>Cantida de mezcla de bomba :</h2>
          <p>{ValueBomba}</p>
        </div>
      )}
       {ValueRyzup !== null && (
        <div>
          <h2>Gramos de ryzup:</h2>
          <p>{ValueRyzup}</p>
        </div>
      )}
    </div>
    
  );
}

export default App;
