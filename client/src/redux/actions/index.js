import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIUS_PAGE";

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
