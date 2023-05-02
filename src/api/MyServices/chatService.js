import addAuthHeader from "@/api/MyServices/authHead";


export default function (instance){
    return {
        getGroupChat() {
            return instance.get('/messages',{ headers: addAuthHeader()})
        },
        sendMessage(message){
            return instance.post('/send',message,{ headers: addAuthHeader()})
        }
    }
}