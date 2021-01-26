import axios from "axios";

const API_USER = process.env.REACT_APP_APIUSER || window.REACT_APP_APIUSER;
const API_PW = process.env.REACT_APP_APIPW || window.REACT_APP_APIPW;

console.log('process.env.REACT_APP_APIUSER', process.env.REACT_APP_APIUSER)
console.log('window.REACT_APP_APIUSER', window.REACT_APP_APIUSER)
console.log('API_USER', API_USER);

export const initInterceptors = () => {
    axios.interceptors.request.use(req => {
        req.auth = {username: API_USER, password: API_PW};
        return req;
      });
}