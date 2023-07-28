require('dotenv').config();
const { Sequelize } = require('sequelize');
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const modelCharacter = require("./models/Character");
const modelUser = require("./models/user");


// console.log(DB_HOST, DB_PASSWORD, DB_USER)
// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://postgres:MiguelSc666@localhost/rickandmorty`,
   { logging: false, native: false, host: "localhost" }
);

// Prueba para ver si funciona
// async function testConnection() {
//    try {
//       await sequelize.authenticate()
//       console.log("conexion ok")
//    } catch (error) {
//       console.log("No se puede conectar")
//    }
// }
// testConnection()
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
//
modelUser(sequelize);
modelCharacter(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Character } = sequelize.models;

User.belongsToMany(Character, { through: 'user_favorite'});
Character.belongsToMany(User, { through: 'user_favorite'});

module.exports = {
   User,
   Character,
   conn: sequelize,
};
