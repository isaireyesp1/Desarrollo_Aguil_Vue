import { createRouter, createWebHistory } from 'vue-router';

import Calculadora from '../components/Calculadora.vue';
import CalculadoraV2 from '../components/CalculadoraV2.vue'; 
import Eventos from '../components/Eventos.vue';
import Horario from '../components/Horario.vue';

const routes = [
    {
        path: '/v1',
        name: 'calculadora',
        component: Calculadora,
    },
    {
        path: '/v2',
        name: 'calculadoraV2',
        component: CalculadoraV2,
    },
    {
        path: '/eventos',
        name: 'eventos',
        component: Eventos,
    },
    {
        path: '/horario',
        name: 'horario',
        component: Horario,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
