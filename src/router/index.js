import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Visites from '../views/Visites.vue'
import Medecin from '../views/Medecin.vue'
import Medicament from '../views/Medicament.vue'

const routes = [{
        path: '/',
        component: Accueil
    },
    {
        path: '/visites',
        component: Visites
    },
    {
        path: '/medecin',
        component: Medecin
    },
    {
        path: '/medicament',
        component: Medicament
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router