import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/HelloWorld.vue';

const routes= [
{
path: '/',
name: 'Home',
component: Layout,
childFren: [
// 添加子路由
// {
// path: '/example',
// name: 'Example',
// component: ExampleComponent,
// },
],
},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;