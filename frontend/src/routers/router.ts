import Vue from 'vue';
import Router from 'vue-router';
import comRoutes from './com/comRouter';
import bizRoutes from './biz/bizRouter';

Vue.use(Router);

const router = new Router({
  routes: [
    ...comRoutes,
    ...bizRoutes,
  ],
});

export default router;
