import { GET_GAMES, GET_GAME_DETAIL } from "../actions";

const initialState = {
  games: [],
  gameDetail: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
      };
    case GET_GAME_DETAIL:
      return {
        ...state,
        gameDetail: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
