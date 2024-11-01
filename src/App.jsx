import React, { useState } from 'react';
import { Button } from "@mui/material";

 // Asegúrate de que la ruta sea correcta

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
    <div id="app-container"> {/* Aquí está el contenedor con el ID app-container */}
      <h1 style={{textAlign:"center",fontSize:"31px"}}>Calculadora de mezclas </h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa un valor"
      />
      <div className='ButtonInput'>
        <Button variant='outlined' color='terciary' style={{width:"105px"}} onClick={addItem}>Agregar</Button>
        <Button variant='outlined' color='terciary' style={{width:"105px"}} onClick={actualizar}>Actualizar</Button>
      </div>
      <div>
        <h2>Valores Agregados:</h2>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={() => calculateValue(item)}>Calcular</button>
            <button onClick={() => editItem(index)}>Editar</button>
            <button onClick={() => deleteItem(index)}>Borrar</button>

          </div>
        ))}
      </div>

      {calculatedValue !== null && (
        <div>
          <h2>Litros de agua alberca:</h2>
          <p>{calculatedValue.toFixed(0)} <span className='nameMez'>Litros</span></p>
        </div>
      )}

      {ValueGraduarte !== null && (
        <div>
          <h2>Cantida de Graduate:</h2>
          <p>{ValueGraduarte.toFixed(0)} <span className='nameMez'>CC</span></p>
        </div>
      )}
      {ValueBomba !== null && (
        <div>
          <h2>Cantida de mezcla de bomba :</h2>
          <p>{ValueBomba.toFixed(0)} <span className='nameMez'>M</span></p>
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