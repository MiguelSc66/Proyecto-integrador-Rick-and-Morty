import React from "react";
import Cards from "./Cards/Cards";

export default function Home(props) {

    return <div>
        <span></span>
        <Cards characters={props.characters} onClose={props.onClose}></Cards>
    </div>
}