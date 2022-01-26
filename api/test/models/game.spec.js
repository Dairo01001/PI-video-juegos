const { sequelize, game } = require("../../src/db");

describe("Model Game Testing", () => {
  afterAll(async () => {
    await sequelize.sync({ force: true });
    sequelize.close();
  });

  describe("Game model", () => {
    beforeEach(async () => {
      await game.sync({ force: true });
    });

    describe("Validaciones", () => {
      it("Intenta crear un game sin datos!", (done) => {
        game
          .create({})
          .then(() => done("No deberia haberse creado!"))
          .catch(() => done());
      });

      it("Intenta crear sin 'name'", (done) => {
        game
          .create({
            description: "Juego de aventura",
            released: "2022/01/22",
            rating: 3,
            platforms: ["PC"],
          })
          .then(() => done("No deberia haberse creado sin 'name'"))
          .catch(() => done());
      });

      it("Intenta crear sin 'description'", (done) => {
        game
          .create({
            name: "Tarzan",
            released: "2022/01/22",
            rating: 3,
            platforms: ["PC"],
          })
          .then(() => done("No deberia haberse creado sin 'description'"))
          .catch(() => done());
      });

      it("Intenta crear sin 'platforms'", (done) => {
        game
          .create({
            name: "Tarzan",
            description: "Juego de aventura",
            released: "2022/01/22",
            rating: 3,
          })
          .then(() => done("No deberia haberse creado sin 'platforms'"))
          .catch(() => done());
      });

      it("Intenta crear con 'ID'", (done) => {
        game
          .create({
            id: 1,
            name: "Tarzan",
            description: "Juego de aventura",
            released: "2022/01/22",
            rating: 3,
            platforms: ["PC"],
          })
          .then(() => done("No deberia haberse creado cuando se envia 'id'"))
          .catch(() => done());
      });

      it("Error con un raiting invalido", (done) => {
        game
          .create({
            name: "Tarzan",
            description: "Juego de aventura",
            released: "2022/01/22",
            rating: "rating invalid",
            platforms: ["PC"],
          })
          .then(() => done("No deberia haberse creado!"))
          .catch(() => done());
      });

      it("Deberia crearse correctamente!", (done) => {
        game
          .create({
            name: "Tarzan",
            description: "Juego de aventura",
            released: "2022/01/22",
            rating: 2,
            platforms: ["PC", "Xbox"],
          })
          .then(() => done())
          .catch(() => done("Deberia haberse creado!"));
      });
    });
  });
});
