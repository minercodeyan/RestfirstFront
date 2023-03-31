import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import StudentPage from "@/pages/StudentPage";
import ProfilePage from "@/pages/ProfilePage";
import TimeTablePage from "@/pages/TimeTablePage";
import InfoPage from "@/pages/InfoPage";
import ProfileMain from "@/pages/profileViews/ProfileMain";
import ProfileStudy from "@/pages/profileViews/ProfileStudy";
import GroupPage from "@/pages/GroupPage";
import AdminPage from "@/pages/adminLayout/AdminPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProfileRating from "@/pages/profileViews/ProfileRating";

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
        path: "/students",
        name: "students",
        meta:{layout:"main"},
        component: StudentPage
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
            {   path: "rating",
                name: "profile-rating",
                component: ProfileRating,
            },
            ]
    },
    {
        path: "/group",
        meta:{layout:"main"},
        name: "profile-group",
        component: GroupPage
    },
    {
        path: "/info",
        meta:{layout:"main"},
        name: "info",
        component: InfoPage
    },
    {
        path: "/admin",
        meta:{layout:"admin"},
        name: "admin-page",
        component: AdminPage
    },
    {  path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFoundPage,
        meta:{layout:"empty"},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;