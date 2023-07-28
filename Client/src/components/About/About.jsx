import React from "react";
import style from "./About.module.css";
import fotoPerfil from "../img/FotoPerfil.jpg";

export default function About() {
    return <div className={style.container}>
    <div className={style.frame}>
      <img src={fotoPerfil} alt="Foto de perfil" className={style.image} />
      <div className={style.info}>
        <h2>Miguel Iván Scaccia</h2>
        <p>
          Soy Miguel Iván Scaccia, tengo 18 años y me apasiona la programación. Me encanta aprender nuevos lenguajes y tecnologías, y disfruto creando aplicaciones y solucionando problemas utilizando mi conocimiento en programación.
        </p>
        <b/>
        <p>Este es mi proyecto invididual de Henry.</p>
        {/* Puedes agregar más información aquí */}
      </div>
    </div>
  </div>
}