import { Args, Mutation, Resolver } from "type-graphql";

import { getRepository } from "fireorm";
import { Service } from "typedi";
import { Usuario } from "../entity/entityUsuario";

//import { isAuth } from "../../middleware/isAuth";


@Service({ global: true })
@Resolver()
export class RegisterUserResolver {

    //@UseMiddleware(isAuth)
    @Mutation(() => Usuario)
    async register(

        @Args() user: Usuario,

    ): Promise<Usuario> {


        const userRepository = getRepository(Usuario);
        const newUser = await userRepository.create(user);
        return newUser
    }
}