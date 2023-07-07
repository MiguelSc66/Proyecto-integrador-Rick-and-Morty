import React, { useState } from "react";
import style from "./searchBar.module.css"

export default function SearchBar(props) {
   const [id, setId] = useState("");

   function handleChange (e) {
      e.preventDefault();
      let input = e.target.value

      setId(input)
   }
   
   
   return (
      <div className={style.searchbar}>
         <input type='search' value={id} onChange={handleChange} placeholder="Busca un personaje..." />
         <button onClick={() => {props.onSearch(id)}}>Agregar</button> 
      </div>
   );
}
