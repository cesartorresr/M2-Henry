import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  
  <div>
    <button onClick={props.onClose}> X </button>
    <div>
      <h2>{props.name}</h2>
    </div>
    <div>
        <h3>Min</h3>
        <h3>{props.min}</h3>
    </div>
    <div>
        <h3>Max</h3>
        <h3>{props.max}</h3>
    </div>
    <div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="logo del clima" />
    </div>
    
  </div>)
};