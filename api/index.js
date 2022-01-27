const app = require("./src/app.js");
const { sequelize } = require("./src/db.js");

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get("port"), () => {
    console.log(`App listen in port ${app.get("port")}`);
  });
});
