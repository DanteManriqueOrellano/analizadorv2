import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Collection } from "fireorm";
@ArgsType()
@ObjectType("usuariosType")
@InputType("inputUsuarios")
@Collection('Usuarios') //nombre personalizado de la coleccion
export class UnUsuario {
    @Field()
    id: string;
    @Field()
    firstName: string;
    @Field()
    email: string;
}
