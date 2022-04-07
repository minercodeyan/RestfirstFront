import instance from "@/api/instance";

export default function (){
    return{
        signUp(user){
          return instance.post('/singup',{
                username: user.username,
                email: user.email,
                password: user.password})
        },
        signIn(user){
            return instance.post('/singin',{
                username: user.username,
                password: user.password})
                .then(response=>{
                    if(response.data.accessToken){
                        localStorage.setItem('user',JSON.stringify(response.data))}
                    return response.data
                })
        },
        logout(){
            localStorage.removeItem('user')
        }

    }

}