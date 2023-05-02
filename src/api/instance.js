import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:10097/api/"
})


export default instance