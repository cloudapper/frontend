import axios from "axios";

const API_URL = process.env.REACT_APP_APIURL || window.location;
const URL = API_URL + "account";

export const signin = ({username, password}, loginCB) => {
    localStorage.setItem("fin", username)
    return axios.get(`${URL}/signin`, {
        auth: {
            username,
            password
        }
    }).then(res => {
        if (res.status === 200) {
            localStorage.setItem("auth_token", res.data)
            loginCB(true)
        } else {
            loginCB(false)
        }
    })
};

export const signup = ({username, password}, loginCB) => {
    localStorage.setItem("fin", username)
    return axios.post(`${URL}/signup`,  {username, password}).then(res => {
        if (res.status === 201) {
            localStorage.setItem("auth_token", res.data)
            loginCB(true)
        } else {
            loginCB(false)
        }
    })
}
