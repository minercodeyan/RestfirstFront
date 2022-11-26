import addAuthHeader from "@/api/MyServices/authHead";

export default function (instance){
    return{
        getGroupTimeTable(number){
            return instance.get('/timetable/'+number ,{ headers: addAuthHeader()})
        },
    }
}