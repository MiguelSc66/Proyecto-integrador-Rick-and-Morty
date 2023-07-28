const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe("GET /character/:id", () => {
        it('Responde con status: 200', async () => {
            await agent.get('/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/character/1');

            const props = ["id","name","species","gender","status","origin","image"]
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            })
        });
        it('Si hay un error responde con status: 500', async () => {
            const respose = await agent.get('/character/12000');
            expect(respose.statusCode).toBeGreaterThan(400)
        })
    });

    describe("GET /user/login", () => {
        it("GET with correct data, should return the access true", async () => {
            const response = await agent.get("/user/login?email=miguel.scaccia1@gmail.com&password=123456")
            expect(response.body.access).toEqual(true)
        });
    });
    
    describe("Favorites", () => {
        const character = { id: 1, name:"Messi"}
        const character2 = { id: 2, name:"Ronaldo"}
        describe("POST/DELETE/favorites", () => {
            it("POST should add the character to the favs", async () => {
                const response = await agent.post("/favorites").send(character);
                expect(response.body).toContainEqual(character)
            });
            it("POST should add the character to the favs", async () => {
                const response = await agent.post("/favorites").send(character2);
                expect(response.body).toContainEqual(character2)
            });
        });
    
        describe("DELETE", () => {
            it("Should return the previus character when sending wrong data", async () => {
                const response = await agent.delete("/favorites/68");
                expect(response.body).toContainEqual(character);
                expect(response.body).toContainEqual(character2);
            });
            it("Should delete the character when sending correct information", async () => {
                const response = await agent.delete("/favorites/2");

                expect(response.body).toContainEqual(character);
                expect(response.body).not.toContainEqual(character2);
            });
        });
    });
    
})