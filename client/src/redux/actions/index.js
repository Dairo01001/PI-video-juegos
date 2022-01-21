import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIUS_PAGE";
export const SEARCH_GAME = "SEARCH_GAME";
export const GET_PAGE = "GET_PAGE";
export const FILTER_GENRE = "FILTER_GENRE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ALL_GAMES = "ALL_GAMES";

export const getGames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      dispatch({ type: GET_GAMES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const allGames = () => {
  return { type: ALL_GAMES, payload: "" };
};

export const searchGame = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames/?name=${name}`
      );
      dispatch({ type: SEARCH_GAME, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getGameDetail = (idVideogame) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogame/${idVideogame}`
      );
      dispatch({ type: GET_GAME_DETAIL, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const nextPage = () => {
  return { type: NEXT_PAGE, payload: 1 };
};

export const previousPage = () => {
  return { type: PREVIOUS_PAGE, payload: -1 };
};

export const setPage = (page) => {
  return { type: GET_PAGE, payload: page };
};

export const filterGenre = (genre) => {
  return { type: FILTER_GENRE, payload: genre };
};

export const orderByName = (payload) => {
  return { type: ORDER_BY_NAME, payload };
};

export const orderByRating = (payload) => {
  return { type: ORDER_BY_RATING, payload };
};
