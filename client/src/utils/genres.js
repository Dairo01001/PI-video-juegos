import axios from "axios";

export const getGenres = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/genres`);
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
