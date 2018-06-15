import { RouteConfig as Route } from 'vue-router';

const HomePage = () => import('@/views/index');
const NotFoundPage = () => import('@/views/com/404');


const PREFIX = '';

const routes: Route[] = [
    { path: '/', name: 'home', component: HomePage, meta: { title: '首页' } },
];

routes.forEach((route) => {
    route.path = PREFIX ? `/${PREFIX}${route.path}` : route.path;
    route.name = PREFIX ? `${PREFIX}-${route.name}` : route.name;
});

export default routes;
