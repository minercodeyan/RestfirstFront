import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/loginPage";
import ClientPage from "@/pages/ClientPage";
import RegPage from "@/pages/RegPage";
const routes = [
    {
        path: "/",
        name: "Home",
        meta:{layout:"main"},
        component: ClientPage
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/registration",
        name: "registration",
        component: RegPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;