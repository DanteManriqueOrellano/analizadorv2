import 'reflect-metadata'; // We need this in order to use @Decorators
import Koa from "koa";
import config from './config';
import koabody from "koa-body";
import Router from "koa-router";
import cors from 'koa2-cors'
import { ApolloServer } from "apollo-server-koa";
import { schemas } from "./api/graphql/schema"
import { connectFireBase } from './loaders/firebase';

const port = 3000
const main = async () => {
    connectFireBase()
    const app = new Koa();
    const router = new Router();
    const apolloServer = new ApolloServer({
        introspection: true,
        schema: await schemas,
        playground: true,
        context: (req) => {
            const { session } = req.ctx;

            // return an object with whatever properties you 
            // need to be accessible inside resolvers as `context`
            return {
                userSession: session
            }
        }
    });
    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

    apolloServer.applyMiddleware({ app, path: '/joder', cors: true });

    app.use(koabody());

    router.get("/ping", async ctx => {
        ctx.body = "pong";
    });

    app.use(router.routes());



    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
};

export default main;
main()
