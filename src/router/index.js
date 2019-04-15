import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '主页',
        auth: false, // 是否需要登录
        keepAlive: false,
      },
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
  ],
});

/**
 * 顶部进度条样式
 */
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

/**
 * 路由前置检查
 */
router.beforeEach((to, from, next) => {
  NProgress.start();// 每次切换页面时，调用进度条
  document.title = to.meta.title;// 页面标题
  // 合法性校验
  if (to.meta.auth) {
    console.log('into auth');
    next();
  }
  next();
});
router.afterEach(() => {
  // 在即将进入新的页面组件前操作
  NProgress.done();// 在即将进入新的页面组件前，关闭掉进度条
});

export default router;
