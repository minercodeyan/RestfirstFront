export default function (instance){
    return{
        getGroupTimeTable(number){
            return instance.get('/timetable/'+number)
        },
    }
}