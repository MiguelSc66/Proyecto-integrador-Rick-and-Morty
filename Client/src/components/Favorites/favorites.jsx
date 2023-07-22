import React, {useState} from "react";
import style from "./favorites.module.css"
import { useSelector, useDispatch  } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../redux/actions/actions";

export default function Favorites() {
    const myFavorites = useSelector(state=> state.myFavorites)
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false);

    function handleOrder(e){
        const selectedOrder = e.target.value;
        dispatch(orderCards(selectedOrder));
        setAux(!aux);
    }

    function handleFilter(e) {
        dispatch(filterCards(e.target.value))
    }


    return <div className={style.container}>
        <select className={style.select} onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select className={style.select} onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <div className={style.card}>
        {
            myFavorites?.map(char => (
                <Card 
                key={char.id} id={char.id} name={char.name} onClose={char.onClose} status={char.status} species={char.species} gender={char.gender} origin={char.origin} image={char.image}
                />
            ))
        }
        </div>
    </div>
}

// Forma vieja usando connect,  useSelector es mejor pero depende de cada proyecto.

// export function mapStateToProps(state) {
//     return {
//         myFavorites: state.myFavorites
//     }
// } 

// export default connect(mapStateToProps)(Favorites)