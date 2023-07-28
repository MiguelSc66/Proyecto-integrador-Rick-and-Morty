const axios = require("axios");
// require("dotenv").config();
// const { API_URL } = process.env;
// console.log(process.env.API_URL);
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const {idChar} = req.params; // Obtenemos el ID del personaje desde los parámetros de la solicitud.

  // axios.get(URL + id)
  //   .then(response => {
  //     const characterData = response.data;
  //     if (characterData.error) {
  //       // Si la API devuelve un error, devolvemos un mensaje de "Not Found" con status 404.
  //       return res.status(404).json({ message: "Not found" });
  //     }

  //     // Si se encuentra el personaje, construimos el objeto con las propiedades deseadas.
  //     const character = {
  //       id: Number(characterData.id),
  //       status: characterData.status,
  //       name: characterData.name,
  //       species: characterData.species,
  //       origin: characterData.origin,
  //       image: characterData.image,
  //       gender: characterData.gender,
  //     };

  //     // Enviamos el objeto como respuesta.
  //     res.status(200).json(character);
  //   })
  //   .catch(error => {
  //     // Si ocurre un error al hacer la petición, respondemos con un status 500 y un mensaje de error.
  //     res.status(500).json({ message: error.message });
  //   });
  try {
    const apiRequest = await axios(`${URL}${idChar}`);
    const { data } = apiRequest;

    // Se pudo hacer OK la solicitud de axios pero la API no tiene info entonces me indica un error.
    if (data.error) {
      return res.status(404).send(data.error);
    }

    const { id, name, status, species, origin, image, gender } = data;
    const character = {
      id: Number(id),
      name,
      status,
      species,
      origin, // Enviamos el objecto "origin" porque el front lo espera
      image,
      gender,
    };
    return res.status(200).json(character);
  } catch (axiosError) {
    // Error en la solicitud de axios por ejemplo: "estaba mal la URL y no se pudo hacer el get"
    return res.status(500).send(axiosError.message);
  }

}

module.exports = {
  getCharById,
};