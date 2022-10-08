import React from 'react';
import stl from './Card.module.css'
import { Link } from  'react-router-dom';

export default function Card ({name, min, max, onClose, img, id}) {
  // acá va tu código
  return (
    <div className={stl.caja}>
     <button className={stl.btnC} onClick={onClose}>X</button>
      <Link to={`/ciudad/${id}`} >
       <h5 className="card-title">{name}</h5>
      </Link>
        <div className={stl.temp}>
      <div>
       <p className={stl.p}> MIN</p>
       <p>{Math.round(min)}</p>
      </div>
    <div>
      <p className={stl.p}>MAX</p>
      <p>{Math.round(max)}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
    </div>
    </div>
  )
};

