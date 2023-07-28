import { ADDFAVORITE, DELETEFAVORITE } from "./types";
import axios from "axios";
//actions creators
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/favorites/';
    
    return async (dispatch) => {
      try {
         const response = await axios.post(endpoint, character); // Enviamos character por body
         const { data } = response;
         return dispatch({
           type: ADDFAVORITE,
           payload: data,
         });
       } catch (error) {
         alert(error.message);
       }
      
      //  axios.post(endpoint, character).then(({ data }) => {
      //     return dispatch({
      //        type: ADDFAVORITE,
      //        payload: data,
      //     });
      //  });
    };
 };

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/favorites/' + id;
    
   return async (dispatch) => {
      try {
         const response = await axios.delete(endpoint);
         const { data } = response;
         return dispatch({
            type: DELETEFAVORITE,
            payload: data,
         });
      } catch (error) {
         alert(error.message);
      }
   };
}

export function filterCards(gender) {
    return {
        type: "FILTER",
        payload: gender
    }
}

export function orderCards(orden) {
    return {
        type: "ORDER",
        payload: orden
    }
}

