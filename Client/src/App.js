import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import style from "./App.css";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites'
import axios from 'axios';
import Home from './components/Home';
import Image from "./components/img/fondo-de-pantalla-de-1920x1080.-wallpaper-hd-1080p-de-rick-y-morty.jpg"


function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const [errorApi, seterrorApi] = React.useState(false);
   const location = useLocation();
   const navigate = useNavigate();
   

   async function login(userData) {
      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/user/login/';
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(access);
      //    access && navigate('/home');
      // });
      const { email, password } = userData;
      const URL = "http://localhost:3001/user/login/";

      try {
         const backendLogin = await axios(
          URL + `?email=${email}&password=${password}`
         );
         const { data } = backendLogin;
         const { access } = data;
         setAccess(access);
         access && navigate("/home");
      } catch (error) {
         // No se pudo hacer la solicitud al backend.
         alert(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   async function onSearch(dato) {
      // agrega personajes a characters
      // axios(`http://localhost:3001/character/${dato}`)
      //   .then((respuesta) => {
      //    console.log(respuesta)
      //     if (respuesta.data.name) {
      //       // Verificar si el personaje ya existe en characters
      //       const characterExists = characters.some((character) => character.id === respuesta.data.id);
            
      //       // Si el personaje ya existe, no lo agregamos nuevamente
      //       if (characterExists) {
      //          alert('¡Este personaje ya está en la lista!');
      //          return;
      //       }
    
      //       setCharacters((oldChars) => [...oldChars, respuesta.data]);
      //     }
      //   })
      //   .catch((err) => alert(err.response.data.error));


      try {
         const backRequest = await axios(
           `http://localhost:3001/character/${dato}`
         );
         if (backRequest.data.name) {
           seterrorApi(false);
           setCharacters((oldChars) => [...oldChars, backRequest.data]);
         } else {
           seterrorApi(true);
         }
       } catch (error) {
         seterrorApi(true);
       }
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
         <Route
          path="/home"
          element={
            !errorApi ? (
              <Home characters={characters} onClose={onClose} />
            ) : (
              <h1>Componente de error 404</h1>
            )
          }
        />
         <Route path='/' element={<Form login={login}></Form>} />
         <Route path="/about" element={<About></About>} />
         <Route path='/detail/:id' element={<Detail></Detail>} />
         <Route path="/favorites" element={<Favorites></Favorites>} />
      </Routes>
    </div>
  );
}  

export default App;