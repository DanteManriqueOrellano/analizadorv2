import { Args, Mutation, Resolver } from "type-graphql";

import { getRepository } from "fireorm";
import { Service } from "typedi";
import { UnUsuario } from "../entity/entityUsuario";


//import { isAuth } from "../../middleware/isAuth";


@Service({ global: true })
@Resolver()
export class RegisterUserResolver {

    //@UseMiddleware(isAuth)
    @Mutation(() => UnUsuario)
    async register(

        @Args(() => UnUsuario) user: UnUsuario

    ): Promise<UnUsuario> {


        const userRepository = getRepository(UnUsuario);
        const newUser = await userRepository.create(
            {
                email: user.email,
                firstName: user.firstName,
                id: user.id

            }
        );
        return newUser
    }
}