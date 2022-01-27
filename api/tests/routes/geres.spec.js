const supertest = require("supertest");
const { sequelize } = require("../../src/db");
const app = require("../../src/app");

const api = supertest(app);

describe("Test routes /genres", () => {
  afterAll(async () => {
    await sequelize.sync({ force: true });
    sequelize.close();
  });

  test("GET /genres primera vez espera status 201", async () => {
    await api.get("/genres").expect(201);
  });

  test("GET /genres sedunda vez espera status 200", async () => {
    await api.get("/genres").expect(200);
  });
});
