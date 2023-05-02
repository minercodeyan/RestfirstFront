import {ref} from "vue";

import indexApi from "@/api/indexApi";

export  default function useChat(){
    const messages = ref([]);
    const errors = ref([])
    
    const getMessages = async () => {
        await indexApi.chat.getGroupChat().then(r=>messages.value = r.data)
    }

    const addMessage = async (message)=>{
        errors.value = [];

        await indexApi.chat.sendMessage(message)
            .then(r=>messages.value.push(r.data))
            .catch(e=>errors.value=e.response.data.errors)
    }

    return{
        messages,
        errors,
        getMessages,
        addMessage
    }
}