import axios from "axios";
import { PORT } from "./port";

export const getGenres = async () => {
  try {
    const response = await axios.get(`http://localhost:${PORT}/genres`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const filterByGenre = (arr, payload) => {
  return arr.filter(({ genres }) => {
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name === payload) {
        return true;
      }
    }
    return false;
  });
};
