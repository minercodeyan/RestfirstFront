import instance from "@/api/instance";
import  clientsModule from "@/api/clientsApi"
import authService from "@/api/MyServices/authService";
export default {
    clientS: clientsModule(instance),
    auth: authService(instance)
}