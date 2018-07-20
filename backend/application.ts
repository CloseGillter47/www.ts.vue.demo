import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as Http from 'http';

export default class Server {
    public app: Koa;

    public static bootstrap(): void {
        const server = new Server();
        const httpServer = Http.createServer(server.app.callback());
        httpServer.listen(3000);
        httpServer.on('error', err => {
            console.log('error', err);
        });
        httpServer.on('listening', () => {
            console.log('listening ------>>');
        })
    }

    constructor() {
        console.log('----------->', this.constructor.name);
        this.app = new Koa();
        const router = new Router();
        router.get('/', async (ctx: Koa.Context, next: Koa.Middleware) => {
            ctx.body = 'Hello Koa2 & Typescript';
        })
        this.app.use(router.routes())
        this.app.on('error', (err, ctx) => {
            console.log('server error', err, ctx);
        })
    }
}
