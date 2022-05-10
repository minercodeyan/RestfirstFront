
export default function (instance){
    return{
        sendMail(email){
            return instance.post("/profile/email",email)
        }
    }

}