import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import imgFond from "../img/imgDetail.jpg"

export default function Detail() {
    const {id} = useParams()
    const [PJcharacter, setCharacter] = useState({});
    
    //[NOTA]: este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.
    useEffect(() => {
        axios(`http://localhost:3001/character/${id}`).then((response) => {
            if (response.data.name) { // Cambiar response.data.character.name a response.data.name
                setCharacter(response.data); // Cambiar response.data.character a response.data
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return () => setCharacter({}); // Agregar una función de limpieza aquí
    }, [id]);
    
    
    return (
    <div className={style.presentation}>
        <img className={style.imgFond} src={imgFond} alt="Imagen de Fondo"/>
        <div className={style.rectangle}>
            <img className={style.roundedImage} src={PJcharacter.image} alt="imagen" />
            <div>
                <h1 className={style.h1}>{PJcharacter.name}</h1>
                {PJcharacter.status ? (
                    <h3 className={style.h3}>Status: {PJcharacter.status}</h3>
                ) : null}
                {PJcharacter.species ? (
                    <h3 className={style.h3}>Species: {PJcharacter.species}</h3>
                ) : null}
                {PJcharacter.gender ? (
                    <h3 className={style.h3}>Gender: {PJcharacter.gender}</h3>
                ) : null}
                {PJcharacter.origin?.name ? (
                    <h3 className={style.h3}>Origin: {PJcharacter.origin.name}</h3>
                ) : null}
            </div>
        </div>
    </div>)
}