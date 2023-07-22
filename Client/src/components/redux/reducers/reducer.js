import { ADDFAVORITE, DELETEFAVORITE, ORDER, FILTER } from "../actions/types";

const inicialState = {
    myFavorites: [],
    allCharacters: [],
    access: false,
    aunMas: []
}

export default function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case ADDFAVORITE:  
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            
        case DELETEFAVORITE:
            return { ...state, myFavorites: action.payload };

        case FILTER:
            const filteredFavorites = state.allCharacters.filter(
                (character) => character.gender === action.payload
            );
            return {
                ...state,
                myFavorites: filteredFavorites
            };

        case ORDER:
            let copys = state.allCharacters.sort((a,b) => {
                if(action.payload === "A") {
                    // menor a mayor
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0 // si son iguales no se mueven
                } else {
                    // mayor a menor
                    if(a.id > b.id) return -1
                    if(a.id < b.id) return 1
                    return 0 // si son iguales no se mueven
                }
            })
            return {
                ...state,
                myFavorites: copys
        };
        default:
            return {...state};
    }
}