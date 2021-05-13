import { getRepository } from "fireorm";
import { Args, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { UnUsuario } from "../../moduloUsuario/entity/entityUsuario";
import { Toe } from "../entity/toe";




@Service({ global: true })
@Resolver()
export class toeResolver {

    @Query(() => String)
    async mirar(

        @Args(() => Toe) toe: Toe,

    ): Promise<string> {


        const userRepository = getRepository(Toe);
        const newUser = await userRepository.create(
            {
                id: toe.id,
                firstName: toe.firstName


            }
        );
        return "newUser"
    }

    @Mutation(() => UnUsuario)
    async ingresar(
        @Args() unUs: UnUsuario

    ): Promise<UnUsuario> {

        const us = new UnUsuario()
        us.email = unUs.email;
        us.firstName = unUs.firstName;
        us.id = unUs.id;
        const repo = getRepository(UnUsuario);
        const nuevo = repo.create(us)
        return nuevo


    }
}