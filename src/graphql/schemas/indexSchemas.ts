
import { buildSchema } from "type-graphql";
import Container from "typedi";
import { clasesResolver } from "../resolvers/indexResolver";
// ES EL INDICE DE SCHEMA
/*
 * EN  ESTE ARCHIVO SE CONSTUIRAN LOS ESQUEMAS
 */
export const schemas: Promise<any> = buildSchema({
    resolvers: clasesResolver,
    validate: false,
    authChecker: ({ context: { req } }) => {
        return !!req.session.userId
    },
    container: Container
})