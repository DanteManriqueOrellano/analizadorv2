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
exports.toeResolver = void 0;
const fireorm_1 = require("fireorm");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const entityUsuario_1 = require("../../moduloUsuario/entity/entityUsuario");
const toe_1 = require("../entity/toe");
let toeResolver = class toeResolver {
    async mirar(toe) {
        const userRepository = fireorm_1.getRepository(toe_1.Toe);
        const newUser = await userRepository.create({
            id: toe.id,
            firstName: toe.firstName
        });
        return "newUser";
    }
    async ingresar(unUs) {
        const us = new entityUsuario_1.UnUsuario();
        us.email = unUs.email;
        us.firstName = unUs.firstName;
        us.id = unUs.id;
        const repo = fireorm_1.getRepository(entityUsuario_1.UnUsuario);
        const nuevo = repo.create(us);
        return nuevo;
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __param(0, type_graphql_1.Args(() => toe_1.Toe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [toe_1.Toe]),
    __metadata("design:returntype", Promise)
], toeResolver.prototype, "mirar", null);
__decorate([
    type_graphql_1.Mutation(() => entityUsuario_1.UnUsuario),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entityUsuario_1.UnUsuario]),
    __metadata("design:returntype", Promise)
], toeResolver.prototype, "ingresar", null);
toeResolver = __decorate([
    typedi_1.Service({ global: true }),
    type_graphql_1.Resolver()
], toeResolver);
exports.toeResolver = toeResolver;
//# sourceMappingURL=tictos.js.map