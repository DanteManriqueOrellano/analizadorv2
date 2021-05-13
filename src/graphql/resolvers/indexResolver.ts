
import { ClassType, NonEmptyArray } from "type-graphql";
import { toeResolver } from "./moduleTic/resolver/tictos";


import { RegisterUserResolver } from "./moduloUsuario/resolver/resolverUsuario";

//INDICE QUE RESUELVE TODOS LOS RESOLVERS
/*
 * EN ESTE ARCHIVO SE AGRUPARAN TODOS LOS RESOLVERS QUE SE IRAN CONSTRUYENDO
 */

export const clasesResolver: NonEmptyArray<ClassType> = [

    toeResolver


    
    ]
