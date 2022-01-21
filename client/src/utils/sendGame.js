import axios from "axios";

export const sendDB = async (game) => {
  const res = await axios.post("http://localhost:3001/videogame", game);
  return res;
};
