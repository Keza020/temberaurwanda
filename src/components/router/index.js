import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/homeviews.vue'

const routes = [
    {
        path:"/",
        name:"home",
        component:HomeView,
    },
];

const router =creatRouter({
    history: createWebHistory(),
    routes,
})
export default router;