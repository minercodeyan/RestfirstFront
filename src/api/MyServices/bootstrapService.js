import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '908cb8e8cda402d83a29',
    cluster: 'eu',
    forceTLS: true
});
