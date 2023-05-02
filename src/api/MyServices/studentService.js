export default function (instance){
    return{
        saveStudent(payload){
            return instance.post('/students',payload)
        },
        getAllStudents(){
            return instance.get('/students', {})
        },
        getStudentsByKey(key){
            return instance.get('/students/?key='+key)
        }
    }
}