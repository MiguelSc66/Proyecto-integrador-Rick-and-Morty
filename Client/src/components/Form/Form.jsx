import React from "react";
import { useState } from "react";
import { validate } from "../validation";
import style from "./Form.module.css";
import Image from "../img/fondo-de-pantalla-de-1920x1080.-wallpaper-hd-1080p-de-rick-y-morty.png";

export default function Form(props) {
    const [userData, setUserData] = useState({email:"", password:""})
    const [errors, setErrors] = useState({})


    function handleChange(event) {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(validate({
            ...userData,
            [name]:value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault() // evita que al usar el submit se actualice.
        props.login(userData)
    }


    return (
    <div className={style.formContainer}>
        <img src={Image} className={style.image} alt="Rick and morty"></img>
        <form onSubmit={handleSubmit} className={style.form}>
            <label className={style.label}>Email</label>
            <input key="2" name="email" onChange={handleChange} className={style.input} value={userData.email} type="text" placeholder="email..." />
            {errors.email && <p className={style.error}>{errors.email}</p>}
            <label className={style.label}>Password</label>
            <input key="3" name="password" onChange={handleChange} className={style.input} value={userData.password} type="password" placeholder="password..." />
            {errors.password && <p className={style.error}>{errors.password}</p>}
            <input type="submit" value="SUBMIT" className={style.submit} />
      </form>
    </div>)
}



// const [user, setUser] = useState({username:"", email:"", password:""})
    // const [errors, setErrors] = useState({})

    

    // function handleChange(event) {
    //     setUser({...user, [event.target.name]: event.target.value})

    //     let incorrect = validate({
    //         ...user,
    //         [event.target.name]: event.target.value
    //     });

    //     setErrors(incorrect);
    // }

    // function validate(datos) {
    //     const regex = new RegExp(/\S+@\S+\.\S+/)

    //     let incorrect = {};
    //     if(datos.username.length <= 4) {
    //         incorrect.username = "Username must be 5 characteres long at least";
    //     } else if(!regex.test(datos.email)){
    //         incorrect.email ="Invalid Email"
    //     }

    //     return incorrect
    // }