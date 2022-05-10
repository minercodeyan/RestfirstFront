import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import ClientPage from "@/pages/ClientPage";
import ProfilePage from "@/pages/ProfilePage";
import TimeTablePage from "@/pages/TimeTablePage";
import InfoPage from "@/pages/InfoPage";
import ProfileMain from "@/pages/profileViews/ProfileMain";
import ProfileStudy from "@/pages/profileViews/ProfileStudy";

const routes = [
    {
        path: "/",
        name: "Home",
        meta:{layout:"main"},
        component: HomePage
    },
    {
        path: "/timetable/:id",
        name: "timetable",
        meta:{layout:"main"},
        component: TimeTablePage
    },
    {
        path: "/login",
        name: "login",
        meta:{layout:"main"},
        component: AuthPage
    },
    {
        path: "/registration",
        name: "registration",
        meta:{layout:"main"},
        component: AuthPage
    },
    {
        path: "/lol",
        name: "lol",
        meta:{layout:"main"},
        component: ClientPage
    },
    {
        path: "/profile/",
        name: "profile",
        meta:{layout:"main"},
        component: ProfilePage,
        children: [
            {
                path: "main",
                name: "profile-main",
                component: ProfileMain
            },
            {
                path: "study",
                name: "profile-stud",
                component: ProfileStudy
            },
            ]
    },
    {
        path: "/profile/study",
        name: "profile-study",
        meta:{layout:"main"},
        component: ProfilePage
    },
    {
        path: "/info",
        name: "info",
        component: InfoPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;