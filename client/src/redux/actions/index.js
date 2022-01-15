export const GET_ROOT = "GET_ROOT";

export const getRoot = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/");
    const json = await response.json();
    dispatch({ type: GET_ROOT, payload: json });
  };
};
