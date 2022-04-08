import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9090/api/v1",
    headers:addAuthHeader()
})
function addAuthHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return {Authorization:'Bearer '+ user.token };
    }
    else return {};
}

export default instance