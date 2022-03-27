import axios from 'axios'
const instance = axios.create({
    baseUrl: 'http://localhost:9090/',
    withCredentials : true,

})