const axios = require("axios");
// require("dotenv").config();
// const { API_URL } = process.env;
// console.log(process.env.API_URL);
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const {id} = req.params; // Obtenemos el ID del personaje desde los parámetros de la solicitud.

  axios.get(URL + id)
    .then(response => {
      const characterData = response.data;
      if (characterData.error) {
        // Si la API devuelve un error, devolvemos un mensaje de "Not Found" con status 404.
        return res.status(404).json({ message: "Not found" });
      }

      // Si se encuentra el personaje, construimos el objeto con las propiedades deseadas.
      const character = {
        id: Number(characterData.id),
        status: characterData.status,
        name: characterData.name,
        species: characterData.species,
        origin: characterData.origin,
        image: characterData.image,
        gender: characterData.gender,
      };

      // Enviamos el objeto como respuesta.
      res.json(character);
    })
    .catch(error => {
      // Si ocurre un error al hacer la petición, respondemos con un status 500 y un mensaje de error.
      res.status(500).json({ message: error.message });
    });
}

module.exports = {
  getCharById,
};