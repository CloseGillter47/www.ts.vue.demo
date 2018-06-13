import { RouteConfig as Route } from 'vue-router';

const HomePage = () => import('@/views/Home');
const NotFoundPage = () => import('@/views/com/404');

const prefix = 'biz';

const routes: Route[] = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/404',
        name: '404NotFound',
        component: NotFoundPage,
    },
];

routes.forEach((route) => {
    route.path = prefix ? `/${prefix}${route.path}` : route.path;
    route.name = prefix ? `${prefix}-${route.name}` : route.name;
});

export default routes;
