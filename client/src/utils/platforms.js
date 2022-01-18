import axios from "axios";

export const getPlatforms= async () => {
    try {
      const response = await axios.get(`http://localhost:3001/platforms`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };