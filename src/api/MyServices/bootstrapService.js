import Echo from 'laravel-echo';
import addAuthHeader from "@/api/MyServices/authHead";

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    authEndpoint : 'http://localhost:10097/broadcasting/auth',
    broadcaster: 'pusher',
    key: '908cb8e8cda402d83a29',
    cluster: 'eu',
    forceTLS: true,
    auth: {
        headers: addAuthHeader(),
    },
});
