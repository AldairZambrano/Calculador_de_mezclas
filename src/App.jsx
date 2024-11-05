import React, { useState } from 'react';
import { Button } from "@mui/material";



function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [calculatedValue, setCalculatedValue] = useState(null);
  const [ValueBomba, setValueBomba] = useState(null);
  const [ValueGraduarte, setValueGraduarte] = useState(null);
  const [ValueRyzup, setValueRyzup] = useState(null);

  const actualizar = () =>  {
    window.location.href = '/';
    }
    console.log(actualizar)
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
      setValueGraduarte(result * 0.84);
      const result2 = numericValue * 0.02;
      setValueBomba(result2);
      setValueRyzup(result2 * 2.5);
    }
  };

  return (
    <div id="app-container">
      <h1 style={{textAlign:"center",fontSize:"31px"}}>InsumoSmart</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese el valor de las cajas"
      />
      <div className='ButtonInput'>
        <Button variant='outlined'  style={{width:"105px",border:"1px solid #4ea93b", color:"black"}} onClick={addItem}>Agregar</Button>
       
      </div>
      <div>
        <h2>Cajas Agregadas:</h2>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button style={{color:"black",background:"none",border:"1px solid #4ea93b"}} onClick={() => calculateValue(item)}>Calcular</button>
            <button style={{color:"black",background:"none",border:"1px solid #4ea93b"}}onClick={() => editItem(index)}>Editar</button>
            <button style={{color:"black",background:"none",border:"1px solid red"}} onClick={() => {
              if (window.confirm('¿Estás seguro de actualizar el valor?')) {
                window.location.href = '/';
                } 

            }}>Actualizar</button>

          </div>
        ))}
      </div>

      {calculatedValue !== null && (
        <div>
          <h2>Agua de Alumbre total:</h2>
          <p>{calculatedValue.toFixed(0)} <span className='nameMez'>Litros</span></p>
        </div>
      )}
        {ValueBomba !== null && (
        <div>
          <h2>Agua de bomba 20LT:</h2>
          <p>{ValueBomba.toFixed(0)} <span className='nameMez'></span> Litros</p>
        </div>
      )}
      {ValueGraduarte !== null && (
        <div>
          <h2>Cantida de Graduate:</h2>
          <p>{ValueGraduarte.toFixed(0)} <span className='nameMez'>Litros</span></p>
        </div>
      )}
      {ValueRyzup !== null && (
        <div>
          <h2>Gramos de ryzup:</h2>
          <p>{ValueRyzup.toFixed(0)} <span className='nameMez'>Gramos</span></p>
        </div>
      )}
    </div>
  );
}

export default App;