import { createRouter ,createWebHashHistory} from'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue';
import Detail from '../pages/Detail.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            name:'首頁',
            path: '/',
            component: Home,
        },
        {
            name:'關於',
            path: '/about',
            component: About,
        },
        {
            name:'新聞',
            path: '/news',
            component: News,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        },
    ]
})

export default router;