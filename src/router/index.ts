import { createRouter ,createWebHashHistory} from'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import News from '../pages/News.vue';
import Detail from '../pages/Detail.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            name:'HOMEPAGE',
            path: '/',
            component: Home,
        },
        {
            name:'ABOUT',
            path: '/about',
            component: About,
        },
        {
            name:'NEWS',
            path: '/news',
            component: News,
            children:[
                {
                    name:'DETAIL',
                    path:'detail/:id/:newsTitle/:newsContent/:publishDate',
                    component:Detail
                }
            ]
        },
    ]
})

export default router;