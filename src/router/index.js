import { createRouter, createWebHashHistory } from "vue-router";

// Agregando paginas de la aplicacion

import Home from "../page/Home.vue";
import About from "../page/About.vue";
import Horario from "../page/Horario.vue";
import Calculadora from "../page/Calculadora.vue";
import Eventos from "../page/Eventos.vue";
import Props from "../page/Props.vue";
import Ejemploweb from "../page/Principio.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/horario",
        name: "horario",
        component: Horario,
    },
    {
        path: "/calculadora",
        name: "calculadora",
        component: Calculadora,
    },
    {
        path: "/eventos",
        name: "eventos",
        component: Eventos,
    },
    {
        path: "/props",
        name: "props",
        component: Props,
    },
    {
        path: "/ejemploweb",
        name: "ejemploweb",
        component: Ejemploweb,
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;