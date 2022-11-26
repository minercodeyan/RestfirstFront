import addAuthHeader from "@/api/MyServices/authHead";

export default function (instance) {
    return {
        getUserGroup(number) {
            return instance.get("/group/" + number, { headers: addAuthHeader()})
        }
    }

}