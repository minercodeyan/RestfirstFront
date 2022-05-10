import instance from "@/api/instance";
import  clientsModule from "@/api/clientsApi"
import authService from "@/api/MyServices/authService";
import timeTableService from "@/api/MyServices/TimeTableService";
import profileService from "@/api/MyServices/profileService";
export default {
    clientS: clientsModule(instance),
    auth: authService(instance),
    timetable: timeTableService(instance),
    profile: profileService(instance)
}