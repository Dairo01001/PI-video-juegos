const { sequelize, genre } = require("../../src/db");

xdescribe("Model Genre Testing", () => {
  afterAll(async () => {
    await sequelize.sync({ force: true });
    sequelize.close();
  });

  describe("Genre model", () => {
    beforeEach(async () => {
      await genre.sync({ force: true });
      await genre.create({ id: 2, name: "Action" });
    });

    describe("Validaciones", () => {
      it("Intenta crear un genre sin datos!", (done) => {
        genre
          .create({})
          .then(() => done("No deberia haberse creado!"))
          .catch(() => done());
      });

      it("Intenta crear un genre sin 'id'", (done) => {
        genre
          .create({ name: "Aventure" })
          .then(() => done("No deberia haberse creado sin 'id'!"))
          .catch(() => done());
      });

      it("Intenta crear un genre sin 'name'", (done) => {
        genre
          .create({ id: 10 })
          .then(() => done("No deberia haberse creado sin 'name'!"))
          .catch(() => done());
      });

      it("Se deberia crear correctamente!", (done) => {
        genre
          .create({ id: 1, name: "Adventure" })
          .then(() => done())
          .catch(() => done("Se deberia haber creado Correctamente!"));
      });

      it("No se deberia crear si ese 'id' ya esta en la DB", (done) => {
        genre
          .create({ id: 2, name: "Adventure" })
          .then(() => done("No deberia haberse creado!"))
          .catch(() => done());
      });

      it("No se deberia crear si ese 'name' ya esta en la DB", (done) => {
        genre
          .create({ id: 1, name: "Action" })
          .then(() => done("No deberia haberse creado!"))
          .catch(() => done());
      });
    });
  });
});
