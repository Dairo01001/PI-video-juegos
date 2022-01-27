const supertest = require("supertest");
const { sequelize } = require("../../src/db");
const app = require("../../src/app");
const { expect } = require("chai");

const api = supertest(app);

describe("Test routes /videogame", () => {
  afterAll(async () => {
    await sequelize.sync({ force: true });
    sequelize.close();
  });

  describe("GET /videogames", () => {
    test("GET /videogame debe enviar un id por params", async () => {
      await api.get("/videogame").expect(204);
    });

    test("GET /videogame/3498", async () => {
      await api.get("/videogame/3498").expect(200);
    });

    test("GET /videogame/3498 deberia devolber detalles del mismo", async () => {
      const response = await api.get("/videogame/3498");
      expect(response.body.id).to.equal(3498);
    });
  });

  describe("POST /videogame", () => {
    test("POST /videogame deberia enviar name, description, platforms por body", async () => {
      await api.post("/videogame").send({}).expect(400);
    });

    test("POST /videogame deberia crear el game", async () => {
      await api
        .post("/videogame")
        .send({ name: "Tarzan", description: "Hola", platforms: ["PC"] })
        .expect(201);
    });
  });
});
