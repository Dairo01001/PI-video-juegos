const axios = require("axios").default;
require("dotenv").config({ path: process.cwd().replace("src/lib", ".env") });
const GAMES = 100;

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
  let games = [];
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
    );
    for (let i = 0; i < GAMES / 20; i++) {
      games = [
        ...games,
        ...response.data.results.map(
          ({ id, name, background_image, genres }) => {
            return {
              id,
              name,
              background_image,
              genres: genres.map(({id, name}) => {
                return {id, name};
              }),
            };
          }
        ),
      ];
      response = await axios.get(response.data.next);
    }
    return [...games, ...response.data.results];
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

const getPlatforms = async () => {
  let platforms = [];
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`
    );
    while (response.data.next) {
      platforms = [
        ...platforms,
        ...response.data.results.map(({ id, name }) => {
          return { id, name };
        }),
      ];
      response = await axios.get(response.data.next);
    }
    return [...platforms, ...response.data.results];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getGenres,
  getGameId,
  getGameName,
  getAllGames,
  getPlatforms,
};
