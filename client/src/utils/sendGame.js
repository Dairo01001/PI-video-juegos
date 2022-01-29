import axios from "axios";
import { PORT } from "./port";

export const sendDB = async (game) => {
  const res = await axios.post(`http://localhost:${PORT}/videogame`, game);
  return res;
};
