import { GET_ROOT } from "../actions";

const initialState = {
  root: "Dairo",
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROOT:
      return {
        ...state,
        root: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
