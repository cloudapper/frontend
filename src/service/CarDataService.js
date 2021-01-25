import axios from "axios";
const API_URL = process.env.REACT_APP_APIURL || window.REACT_APP_APIURL || window.location + "api/";

const URL = API_URL + "data/";

export const findByFin = (fin) => {
  return axios.get(URL + fin);
};
