import { createRouter, createWebHashHistory } from 'vue-router';
import user from '@/api/user';
import { Toast } from 'vant';

const checkUser = async () => {
  let res;
  try {
    res = await user.check();
  } catch (error) {
    console.error(error);
  }
  console.log(res);
  if (!res) {
    return false;
  }
  if (res === 'login') {
    return { path: 'login' };
  }
};

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/index.vue'),
    beforeEnter: [checkUser],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

router.beforeEach((to, from) => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  });
});

router.afterEach((to, from) => {
  Toast.clear();
});
export default router;
