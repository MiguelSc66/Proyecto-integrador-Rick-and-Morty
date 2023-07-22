import Card from '../Card/Card';
import React from 'react';
import style from "./cards.module.css";

export default function Cards(props) {
   
   return <div className={style.container}>
      {props.characters.map((obj) => {
         return <Card key={obj.id} id={obj.id} name={obj.name} onClose={props.onClose} status={obj.status} species={obj.species} gender={obj.gender} origin={obj.origin} image={obj.image} />
      })}
   </div>
}
