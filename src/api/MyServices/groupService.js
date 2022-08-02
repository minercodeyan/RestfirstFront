export default function (instance){
    return{
        getUserGroup(number){
            return instance.get("/group/"+number)
        }
    }

}