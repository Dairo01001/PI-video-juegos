import axios from "axios";

export const getGenres = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/genres`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
