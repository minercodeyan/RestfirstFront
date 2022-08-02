import { createApp } from 'vue'

import App from './App.vue'
import router from "@/router";
import store from "@/store/storeIndex";
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App);
app.use(router).use(store,VueAwesomePaginate).mount("#app");
