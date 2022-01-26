const axios = require("axios").default;
const config = require("../config");
const GAMES = 100;

const getGameId = async (idVideogame) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${idVideogame}?key=${config.API.KEY}`
    );
    const {
      id,
      name,
      background_image,
      genres,
      description,
      released,
      rating,
      platforms,
    } = response.data;
    return {
      id,
      name,
      background_image,
      genres: genres.map(({ id, name }) => {
        return { id, name };
      }),
      description,
      released,
      rating,
      platforms: platforms.map(({ platform }) => {
        return { id: platform.id, name: platform.name };
      }),
    };
  } catch (error) {
    return error;
  }
};

const getGameName = async (name) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${config.API.KEY}`
    );
    return response.data.results;
  } catch (error) {
    return error;
  }
};

const getAllGames = async () => {
  let pages = [1, 2, 3, 4, 5, 6];
  try {
    let promises = await Promise.all(
      pages.map((page) => {
        return axios.get(
          `https://api.rawg.io/api/games?key=${config.API.KEY}&page=${page}`
        );
      })
    );
    promises = promises.map((promise) => {
      return promise.data.results.map(
        ({ id, name, background_image, genres, rating }) => {
          return {
            id,
            name,
            background_image,
            genres: genres.map(({ id, name }) => {
              return { id, name };
            }),
            rating,
          };
        }
      );
    });
    return promises.flat();
  } catch (error) {
    return error;
  }
};

const getGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${config.API.KEY}`
    );
    return response.data.results.map(({ id, name }) => {
      return { id, name };
    });
  } catch (error) {
    return error;
  }
};

const getPlatforms = async () => {
  let platforms = [];
  try {
    let response = await axios.get(
      `https://api.rawg.io/api/platforms?key=${config.API.KEY}`
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
