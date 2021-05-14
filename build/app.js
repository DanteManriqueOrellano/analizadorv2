"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_json_1 = __importDefault(require("koa-json"));
const apollo_server_koa_1 = require("apollo-server-koa");
const indexSchemas_1 = require("./graphql/schemas/indexSchemas");
const DB_1 = require("./DB");
DB_1.ConnecttoFirebase();
const port = process.env.PORT || 3000;
const main = async () => {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    const apolloServer = new apollo_server_koa_1.ApolloServer({
        introspection: true,
        schema: await indexSchemas_1.schemas,
        playground: true,
        context: (req) => {
            const { session } = req.ctx;
            return {
                userSession: session
            };
        }
    });
    app.use(koa_json_1.default());
    app.use(koa_bodyparser_1.default());
    app.use(router.routes());
    app.use(koa2_cors_1.default({ credentials: true, origin: "http://localhost:3000" }));
    apolloServer.applyMiddleware({ app, path: '/joder', cors: true });
    router.get("/ping", async (ctx) => {
        ctx.body = "pong";
    });
    app.listen(port, () => console.log(`server runnning at ${port}`));
};
exports.default = main;
main();
//# sourceMappingURL=app.js.map