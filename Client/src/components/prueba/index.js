const axios = require("axios")
const http = require("http")

const server = http.createServer((request, response) => {
    console.log(request)

    axios("https://rickandmortyapi.com/api/character").then((info) => {
        response.writeHead(200, {"Content-type": "text/plain"})
        response.end("Salio todo bien")
    })
})

server.listen(3001, () => {
    console.log('Server running on http:localhoste:3001/')
})