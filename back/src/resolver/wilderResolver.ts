import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Wilder } from "../entity/wilder";
import dataSource from "../utils";

@Resolver(Wilder)
export class WilderResolver {
  @Authorized()
  @Query(() => [Wilder])
  async getAllWilders(): Promise<Wilder[]> {
    return await dataSource.manager.find(Wilder, {
      relations: {
        grades: {
          skill: true,
        },
      },
    });
  }

  @Authorized()
  @Mutation(() => Wilder)
  async createWilder(@Arg("name") name: string): Promise<Wilder> {
    const newWilder = new Wilder();
    newWilder.name = name;
    const wilderFromDB = await dataSource.manager.save(Wilder, newWilder);
    console.log(wilderFromDB);
    return wilderFromDB;
  }
}
