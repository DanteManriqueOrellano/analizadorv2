
import { ArgsType, Field, InputType, ObjectType } from "type-graphql";
import { Collection } from "fireorm";
@ArgsType()
@ObjectType()
@InputType()
@Collection('Toe') //nombre personalizado de la coleccion
export class Toe{
    @Field()
    id: string;
    @Field()
    firstName: string;
   
}