"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const port = 3000;
const main = async () => {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    app.use(koa2_cors_1.default({ credentials: true, origin: "http://localhost:3000" }));
    app.use(koa_body_1.default());
    router.get("/ping", async (ctx) => {
        ctx.body = "pong";
    });
    app.use(router.routes());
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
};
exports.default = main;
main();
//# sourceMappingURL=app.js.map