import React from 'react';

export default function Card ({name, min, max, onClose, img}) {
  // acá va tu código
  return (
    <div>
     <button onClick={onClose}>X</button>
      <h3> {name}</h3>
      <div>
       <p> MIN</p>
       <p>{min}</p>
      </div>
    <div>
      <p>MAX</p>
      <p>{max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
 
    </div>
  )
};