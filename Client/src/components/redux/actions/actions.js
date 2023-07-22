import { ADDFAVORITE, DELETEFAVORITE } from "./types";
import axios from "axios";
//actions creators
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/favorites/';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADDFAVORITE,
             payload: data,
          });
       });
    };
 };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/favorites/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETEFAVORITE,
             payload: data,
       });
       });
    };
 };

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

