require("dotenv").config(); // Agrega al objeto "process" en la prop "env" nuestras variables
const { PORT, PASSWORD } = process.env;
const { conn } = require('./DB_connection');

const server = require("./app")

// server.listen(PORT, async () => {
//   await conn.sync({force: false})
//   console.log("Server raised in port: " + PORT);
// });

conn
  .sync({force: false})
  .then((value) => {
    server.listen(PORT, async () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  .catch((error) => console.error(error))

