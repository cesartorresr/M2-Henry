import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (<div>
    <input type='text' placeholder='ciudad'></input>
    <button onClick={() =>props.onSearch ('cualquier Ciudad')}> Agregar</button>
  </div>)
};