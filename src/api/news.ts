import axios from "axios";
import { today } from "utils/constants";

export const fetchNews = async () => {
  const { data } = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      q: "apple",
      from: today,
      to: today,
      sortBy: "popularity",
      apiKey: process.env.REACT_APP_API_KEY_NEWS,
    },
  });
  return data;
};
