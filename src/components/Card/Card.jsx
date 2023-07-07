import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({name, species, onClose, gender, status, origin, image, id}) {
   // estilos de las cartas de manera invididual, para cambiar algo general ir a cards
   return (
      <div className={style.card}>
         <div className={style.front}>
            <Link to={`/detail/${id}`}>
               <h3 className={style.name}>{name}</h3>
            </Link>
            <img className={style.img} src={image} alt={name} />
            <button className={style.button} onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.back}>
            <h4 className={style.h4}>Status: {status}</h4>
            <h4 className={style.h4}>Species: {species}</h4>
            <h4 className={style.h4}>Gender: {gender}</h4>
            <h4 className={style.h4}>Origin: {origin.name}</h4>
         </div>
      </div>
   );
}
