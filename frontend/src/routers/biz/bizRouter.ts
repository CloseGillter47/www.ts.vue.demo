import { RouteConfig as Route } from 'vue-router';

const NotFoundPage = () => import('@/views/com/404');

const PREFIX = 'biz';

const routes: Route[] = [
    { path: '/404', name: '404-not-found', component: NotFoundPage, meta: { title: '找不到页面' } },
];

routes.forEach((route) => {
    route.path = PREFIX ? `/${PREFIX}${route.path}` : route.path;
    route.name = PREFIX ? `${PREFIX}-${route.name}` : route.name;
});

export default routes;
