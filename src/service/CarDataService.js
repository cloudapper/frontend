import axios from "axios";
import { getToken } from "./AccountService";
const API_URL = process.env.REACT_APP_APIURL || window.REACT_APP_APIURL || window.location;
const API_PATH = process.env.REACT_APP_APIPATH || window.REACT_APP_APIPATH || "";
const URL = API_URL + API_PATH + "data";

const subtractMinutes = (date, minutes) => {
  return new Date(date.getTime() - minutes*60000).toISOString();
}

export const findByFin = (fin) => {
  return axios.get(`${URL}?fin=${fin}`, getHeader())
};

export const findByFinLastXMinutes = (fin, minutes) => {
  const timestamp = subtractMinutes(new Date(), minutes)
  console.log('getHeader()', getHeader())
  return axios.get(`${URL}?fin=${fin}&timestamp=${timestamp}`, getHeader())
};

const getHeader = () => { 
  return {
    headers: {
      authorization: "Basic " + getToken()
    } 
  } 
};