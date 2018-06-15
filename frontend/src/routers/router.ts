import Vue from 'vue';
import Router from 'vue-router';

const NotFoundPage = () => import('@/views/com/404');

import comRoutes from './com/comRouter';
import bizRoutes from './biz/bizRouter';

Vue.use(Router);

const WEB_NAME = '黑子の日常';
const WEB_HREF = window.location.href;

const router = new Router({
  routes: [
    { path: '/404', name: '404', component: NotFoundPage, meta: { title: '找不到页面' } },
    ...comRoutes,
    ...bizRoutes,
  ],
});

router.beforeEach(async (to, from, next) => {
  if (!to.name) {
    console.log('-------');
    return next({ name: '404', replace: true, params: { fullPath: WEB_HREF.split('#')[0] + '#' + to.fullPath } });
  }

  // 统一设置页面标题
  document.title = `${to.meta.title || '未知页面'} | ${WEB_NAME}`;

  next();
});


export default router;
