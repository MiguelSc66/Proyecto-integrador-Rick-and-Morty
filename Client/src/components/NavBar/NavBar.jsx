import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

export default function Nav({onSearch}) {
    return <div className={style.container}>
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/favorites">FAVORITES</Link>
        <SearchBar onSearch={onSearch}></SearchBar>
    </div>
} 