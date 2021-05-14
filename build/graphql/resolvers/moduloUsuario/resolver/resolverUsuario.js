"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const fireorm_1 = require("fireorm");
const typedi_1 = require("typedi");
const entityUsuario_1 = require("../entity/entityUsuario");
let RegisterUserResolver = class RegisterUserResolver {
    async register(user) {
        const userRepository = fireorm_1.getRepository(entityUsuario_1.UnUsuario);
        const newUser = await userRepository.create({
            email: user.email,
            firstName: user.firstName,
            id: user.id
        });
        return newUser;
    }
};
__decorate([
    type_graphql_1.Mutation(() => entityUsuario_1.UnUsuario),
    __param(0, type_graphql_1.Args(() => entityUsuario_1.UnUsuario)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entityUsuario_1.UnUsuario]),
    __metadata("design:returntype", Promise)
], RegisterUserResolver.prototype, "register", null);
RegisterUserResolver = __decorate([
    typedi_1.Service({ global: true }),
    type_graphql_1.Resolver()
], RegisterUserResolver);
exports.RegisterUserResolver = RegisterUserResolver;
//# sourceMappingURL=resolverUsuario.js.map