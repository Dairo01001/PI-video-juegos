const axios = require("axios").default;
require("dotenv").config({ path: process.cwd().replace("src/lib", ".env") });

const cantidadGames = 100;

const getGames = async (name, idVideogame) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
    );
    return response.data.results.splice(0, cantidadGames);
  } catch (error) {
    return error;
  }
};

const getGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getGames,
  getGenres,
};
