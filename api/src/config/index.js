require("dotenv").config();

module.exports = {
  DB: {
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
  },
  API: { KEY: process.env.API_KEY },
  SERVER_PORT: process.env.SERVER_PORT || 3001,
};
