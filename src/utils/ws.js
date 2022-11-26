
import SockJS from 'sockjs-client'
import {Stomp} from "@stomp/stompjs";

var stompClient = null;

const handlers=[]

export function connect() {
    const socket = new SockJS('http://localhost:9090/gs-guide-websocket');
    stompClient = Stomp.over(socket)
    stompClient.connect({}, frame=>{
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/activity', message=> {
           handlers.forEach(handler=>handler(JSON.parse(message.body)))
        });
    });
}

export function addHandler(handler){
   handlers.push(handler)
}


export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

export function sendMessage(message) {
    stompClient.send("/app/changeMessage", {}, JSON.stringify(message))
}
