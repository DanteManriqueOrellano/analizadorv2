import 'reflect-metadata'; // We need this in order to use @Decorators
import Koa from "koa";

import koabody from "koa-body";
import Router from "koa-router";
import cors from 'koa2-cors'
import { ApolloServer } from "apollo-server-koa";


import { schemas } from './graphql/schemas/indexSchemas';
import { ConnecttoFirebase } from './DB';


ConnecttoFirebase()
const port = process.env.PORT || 3000;
const main = async () => {
    
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

    app.listen(port, ()=> console.log(`server runnning at ${port}`))

};

export default main;
main()
