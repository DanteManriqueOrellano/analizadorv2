"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const type_graphql_1 = require("type-graphql");
const typedi_1 = __importDefault(require("typedi"));
const resolvers_1 = require("../resolvers");
exports.schemas = type_graphql_1.buildSchema({
    resolvers: resolvers_1.clasesResolver,
    validate: false,
    authChecker: ({ context: { req } }) => {
        return !!req.session.userId;
    },
    container: typedi_1.default
});
//# sourceMappingURL=index.js.map