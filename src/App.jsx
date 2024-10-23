import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()

  const Calcular = () => {
    try {
      setContador(eval(contador).toString());
      saveInputValue();
    } catch {
      setContador('erro');
    }
 };

 const Clear = () => {
    setContador('');
    saveInputValue();
 };

 const Eliminar = () => {
    try{
      setContador(contador.slice(0, -1));
      saveInputValue();
    }
    catch(error){
      console.log(error)
    }
 };
 

  return (
    <>
    <form id='survey-form'>
      <div className='form-group'>
        <label>Digite las cajas</label>
        <input type="number"
        value={count} 
        name='cajas'
        className='form-control'
        placeholder='Digite las cajas'
        required/>
      </div>
      <div >
      <button className="error"size="md" color="info" onClick={Clear} >Clear</button>
      <button className="error"size="md" color="info" onClick={Calcular} >Calcular</button>
      <button className="error"size="md" color="info" onClick={Eliminar} >Eliminar</button>
      </div>
    </form>
    </>
  )
}

export default App
