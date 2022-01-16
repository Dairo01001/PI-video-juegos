const axios = require("axios").default;
require("dotenv").config({ path: process.cwd().replace("src/lib", ".env") });

const getGameId = async (idVideogame) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${idVideogame}?key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getGameName = async (name) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${process.env.API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

const getAllGames = async () => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
    );
    return response.data.results;
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
  getGenres,
  getGameId,
  getGameName,
  getAllGames,
};
