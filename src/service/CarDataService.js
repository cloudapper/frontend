import axios from "axios";
const API_URL = window.location + "api/";
//const API_URL = "http://192.168.0.200/api/";
const URL = API_URL + "data/";

export const findByFin = (fin) => {
  return axios.get(URL + fin);
};
