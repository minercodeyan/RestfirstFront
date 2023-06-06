import router from "@/router";

export default function addAuthHeader(){
    let user = JSON.parse(localStorage.getItem('user'));

    if(user.expiredAt < new Date().getTime()){
        router.push({ path: '/home', replace: true })
    }

    if (user && user.accessToken) {
        return {Authorization:'Bearer '+ user.accessToken };
    }
    else return {};
}