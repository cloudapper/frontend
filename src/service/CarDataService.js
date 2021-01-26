import axios from "axios";
const API_URL = process.env.REACT_APP_APIURL || window.REACT_APP_APIURL || window.location + "api/";
const URL = API_URL + "data";

function subtractMinutes(date, minutes) {
  return new Date(date.getTime() - minutes*60000).toISOString();
}

export const findByFin = (fin) => {
  return axios.get(`${URL}?fin=${fin}`);
};

export const findByFinLastXMinutes = (fin, minutes) => {
  const timestamp = subtractMinutes(new Date(), minutes)
  return axios.get(`${URL}?fin=${fin}&timestamp=${timestamp}`);
};

