import React, { useState, useEffect } from "react";
import style from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav} from "../redux/actions/actions"
// import { connect } from "react-redux";
import imgLike   from "../img/like.png"
import imgDislike from "../img/dislike.png"

export default function Card({name, species, onClose, gender, status, origin, image, id}) {
   // estilos de las cartas de manera invididual, para cambiar algo general ir a cards
   const [isFav, setFav] = useState(false);
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites)

   function handleClick() {
      if (isFav) {
         setFav(false);
         dispatch(removeFav(id));
         } else{
            setFav(true);
            dispatch(addFav({name, species, onClose, gender, status, origin, image, id,}))
         }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.card}>
         <div className={style.front}>
            <Link to={`/detail/${id}`}>
               <h3 className={style.name}>{name}</h3>
            </Link>
            <img className={style.img} src={image} alt={name} />
            <button className={style.button} onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.back}>
            <h4 className={style.h4}>Status: {status}</h4>
            <h4 className={style.h4}>Species: {species}</h4>
            <h4 className={style.h4}>Gender: {gender}</h4>
            <h4 className={style.h4}>Origin: {origin.name}</h4>
         </div>
         { isFav ? (
            <button className={style.buttonLike}onClick={handleClick}><img src={imgLike} className={style.imglike} alt="like" /></button>
         ) : (
            <button className={style.buttonDislike} onClick={handleClick}  ><img src={imgDislike} alt="Dislike" className={style.imgdislike}/></button>
         )}
      </div>
   );
}

// function mapDispatchToProps (dispatch) {
//    return {
//       addFav: function(character) {
//          dispatch(addFav(character))
//       },
//       removeFav : function(id){
//          dispatch(removeFav(id))
//       }
//    }
// }

// export function mapStateToProps(globalState) {
//    return {
//       myFavorites: globalState.myFavorites
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card)