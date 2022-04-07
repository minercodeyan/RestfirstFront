import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9090/api/v1",
    headers:addAuthHeader()
})
function addAuthHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return {Authorization:'Bearer '+ user.accessToken };
    }
    else return {};
}

export default instance