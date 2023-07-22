

let myFavorites = [];

function postFav(req, res) {
    const newFavorite = req.body;
    myFavorites.push(newFavorite);
    res.json(myFavorites)
}

function deleteFav(req, res) {
    const {id} = req.params;
    let filtredPj = myFavorites.filter(Pj => Pj.id !== Number(id))
    myFavorites = filtredPj
    res.json(myFavorites)
}

function getFav(req, res) {
    return res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
    getFav
}