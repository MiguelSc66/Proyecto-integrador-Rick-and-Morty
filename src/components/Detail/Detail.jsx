import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";

export default function Detail() {
    const {id} = useParams()
    const [character, setCharacter] = useState({});
    
    //[NOTA]: este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    
    return (
    <div className={style.presentation}>
        <div className={style.rectangle}>
            <img className={style.roundedImage} src={character.image} alt="imagen" />
            <div>
                <h1 className={style.h1}>{character.name}</h1>
                {character.status ? (
                    <h3 className={style.h3}>Status: {character.status}</h3>
                ) : null}
                {character.species ? (
                    <h3 className={style.h3}>Species: {character.species}</h3>
                ) : null}
                {character.gender ? (
                    <h3 className={style.h3}>Gender: {character.gender}</h3>
                ) : null}
                {character.origin?.name ? (
                    <h3 className={style.h3}>Origin: {character.origin.name}</h3>
                ) : null}
            </div>
        </div>
    </div>)
}