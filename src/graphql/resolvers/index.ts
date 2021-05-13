
import { ClassType, NonEmptyArray } from "type-graphql";
import { Service } from "typedi";
import { TicTacToe } from "./moduleTicTac/resolver/tictacResolver";
import { RegisterUserResolver } from "./moduloUsuario/resolver/resolverUsuario";

//INDICE QUE RESUELVE TODOS LOS RESOLVERS
/*
 * EN ESTE ARCHIVO SE AGRUPARAN TODOS LOS RESOLVERS QUE SE IRAN CONSTRUYENDO
 */
export default () => {
    const clasesResolver: NonEmptyArray<ClassType> = [

        RegisterUserResolver,
    ]
    return clasesResolver;
}