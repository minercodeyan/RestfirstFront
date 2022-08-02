import instance from "@/api/instance";
import  studentModule from "@/api/MyServices/studentService"
import authService from "@/api/MyServices/authService";
import timeTableService from "@/api/MyServices/TimeTableService";
import profileService from "@/api/MyServices/profileService";
import groupService from "@/api/MyServices/groupService";
export default {
    students: studentModule(instance),
    auth: authService(instance),
    timetable: timeTableService(instance),
    profile: profileService(instance),
    group: groupService(instance)
}