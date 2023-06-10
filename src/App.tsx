import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export const App = () => {
  const [cislo, setCislo] = useState("Ahoj")

  console.log("Běžím")
  const navigate = useNavigate()

  const plusJedna = () => {
    setCislo(cislo + "kyyyy")
  }

  useEffect(() => {
    setCislo("100")
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {cislo}
        <input onChange={(e) => {
          console.log(e)
          console.log(e.target.value)
        }}></input>
        <button onClick={() =>{ plusJedna()}}>plus jedna</button>
        <br></br>
        <button onClick={() => {
          navigate("/druhastranka")
        }}>Druha stranka</button>
      </header>
    </div>
  );
}
