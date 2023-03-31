import addAuthHeader from "@/api/MyServices/authHead";

export default function (instance){
    return{
        sendMail(email){
            return instance.post("/profile/email",email,{ headers: addAuthHeader()})
        },
        getAllMessages(group_id){
            return instance.get("/profile/messages?groupNumber="+group_id,{ headers: addAuthHeader()})
        }
    }

}