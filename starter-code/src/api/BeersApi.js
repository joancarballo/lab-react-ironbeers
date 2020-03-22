import axios from "axios";

const beersApi = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const Beers = async () => {
  const response = await beersApi.get("/beers");
  return response.data;
};
