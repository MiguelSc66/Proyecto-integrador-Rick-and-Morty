import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import style from "./App.css";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import axios from 'axios';
import Home from './components/Home';
import Image from "./components/img/fondo-de-pantalla-de-1920x1080.-wallpaper-hd-1080p-de-rick-y-morty.jpg"


function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();
   const EMAIL = 'miguel.scaccia1@gmail.com'
   const PASSWORD = '12345'

   function Login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if (!characters.some((character) => character.id === data.id)) {
              setCharacters((prevCharacters) => [...prevCharacters, data]);
            } else {
              window.alert('¡Este personaje ya está en la lista!');
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      let arrgeloFiltrado = characters.filter(obj => {return obj.id !== id})
      setCharacters(arrgeloFiltrado)
   }
   

  return (
    <div className={style.App}>
      <img className='imagen' src={Image} alt='Fondo de pantall'></img>
      {location.pathname !== '/' && <NavBar onSearch={onSearch}></NavBar>}
      <Routes>
         {/* <Route path='/*' element={<NavBar onSearch={onSearch}></NavBar>} /> */}
         <Route path='/' element={<Form login={Login}></Form>} />
         <Route path="/home" element={<Home characters={characters} onClose={onClose}/>} />
         <Route path="/about" element={<About></About>} />
         <Route path='/detail/:id' element={<Detail></Detail>} />
      </Routes>
    </div>
  );
}  

export default App;