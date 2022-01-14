export const GET_ROOT = "GET_ROOT";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export const getRoot = (name) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    );
    const json = await response.json();
    dispatch({ type: GET_ROOT, payload: json });
  };
};
