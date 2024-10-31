import { createRouter ,createWebHashHistory} from'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/news',
            component: News,
        },
    ]
})

export default router;