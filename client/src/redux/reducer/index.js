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
} from "../actions";

import { ASCENDING_ORDER } from "../../utils/globalConstants.js";

import { filterByGenre } from "../../utils/genres";

const initialState = {
  games: [],
  gameDetail: {},
  sortOrFilter: [],
  page: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
        sortOrFilter: payload,
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
        sortOrFilter: payload,
      };
    case GET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case FILTER_GENRE:
      return {
        ...state,
        sortOrFilter: filterByGenre(state.games, payload),
      };
    case ORDER_BY_NAME:
      return {
        ...state,
        sortOrFilter: state.sortOrFilter.sort((curr, next) => {
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
        sortOrFilter: state.sortOrFilter.sort((curr, next) =>
          payload !== ASCENDING_ORDER
            ? curr.rating - next.rating
            : next.rating - curr.rating
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
