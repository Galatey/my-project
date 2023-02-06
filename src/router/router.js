import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Fallowing from "@/pages/Fallowing.vue";

const routes = [
    {
        path: '/',
        component: Main 
    },

    {
        path: '/Fallowing',
        component: Fallowing
    },
]

const router = createRouter (
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;