import axios from "axios";
//const API_URL = process.env.NODE_API_URL || window.location + "api/";
const API_URL = "http://192.168.178.220/api/";
const URL = API_URL + "data/";

export const findByFin = (fin) => {
  return axios.get(URL + fin);
};
