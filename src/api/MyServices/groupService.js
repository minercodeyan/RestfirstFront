import addAuthHeader from "@/api/MyServices/authHead";

export default function (instance) {
    return {
        getUserGroup() {
            return instance.get("/groups/user-group", { headers: addAuthHeader()})
        }
    }

}