import { createApp } from 'vue'

import App from './App.vue'
import router from "@/router";
import store from "@/store/storeIndex";
import Pagination from 'vue-pagination-2';
import {connect} from "@/utils/ws";
import 'materialize-css/dist/js/materialize.min'

connect()

const app = createApp(App);

app.component('VuePagination',Pagination)

app.use(router).use(store).mount("#app");
