
export default function (instance){
    return{
        saveClient(payload){
            return instance.post('/clients',payload)
        },
        getAllClients(){
            return instance.get('/clients', {})
        }
    }
}