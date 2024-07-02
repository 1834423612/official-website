// 导入 vue-router 相关的依赖
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Mentors from '../views/Mentors.vue';
import Members from '../views/Members.vue';
import Robots from '../views/Robots.vue';
import News from '../views/News.vue';
import Sponsors from '../views/Sponsors.vue';

// 定义路由规则
const routes = [
  { path: '/', component: Home },
  { path: '/mentors', component: Mentors },
  { path: '/members', component: Members },
  { path: '/robots', component: Robots },
  { path: '/news', component: News },
  { path: '/sponsors', component: Sponsors },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
