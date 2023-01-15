import { createRouter,createWebHashHistory } from 'vue-router';
// import app from '../src/App.vue';
import news from '../src/components/news.vue';
import works from '../src/components/works.vue';
import teacher from '../src/components/teacher.vue';
import courses from '../src/components/courses.vue';
import home from '../src/components/home.vue';


export default createRouter({
    history: createWebHashHistory(),
    routes:[
        // {path: '/', component: app},
        {path: '/news', component: news},
        {path: '/works', component: works},
        {path: '/teacher', component: teacher},
        {path: '/courses', component: courses},
        {path: '/home', component:home}
    ]
})