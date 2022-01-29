import axios from "axios";
import { PORT } from "./port";

export const getPlatforms= async () => {
    try {
      const response = await axios.get(`http://localhost:${PORT}/platforms`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };