import {
  GET_GAMES,
  GET_GAME_DETAIL,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SEARCH_GAME,
  GET_PAGE,
  FILTER_GENRE,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  ALL_GAMES,
  GET_GAMES_DB,
} from "../actions";

import { ASCENDING_ORDER } from "../../utils/globalConstants.js";

import { filterByGenre } from "../../utils/genres";

const initialState = {
  games: [],
  gameDetail: {},
  currentGames: [],
  page: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
        currentGames: payload,
      };
    case ALL_GAMES:
      return {
        ...state,
        currentGames: state.games,
      };
    case GET_GAME_DETAIL:
      return {
        ...state,
        gameDetail: payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + payload,
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page + payload,
      };
    case SEARCH_GAME:
      return {
        ...state,
        currentGames: payload,
      };
    case GET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case FILTER_GENRE:
      return {
        ...state,
        currentGames: filterByGenre(state.games, payload),
      };
    case ORDER_BY_NAME:
      return {
        ...state,
        currentGames: state.currentGames.sort((curr, next) => {
          if (curr.name < next.name)
            return payload === ASCENDING_ORDER ? -1 : 1;
          if (curr.name > next.name)
            return payload === ASCENDING_ORDER ? 1 : -1;
          return 0;
        }),
      };
    case ORDER_BY_RATING:
      return {
        ...state,
        currentGames: state.currentGames.sort((curr, next) =>
          payload !== ASCENDING_ORDER
            ? curr.rating - next.rating
            : next.rating - curr.rating
        ),
      };
    case GET_GAMES_DB:
      return {
        ...state,
        currentGames: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
