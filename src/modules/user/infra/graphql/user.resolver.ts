import {
  InputType,
  Field,
  Resolver,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql';
import { UserService } from '../../user.service';

@InputType()
class CreateUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  firstName: string;
}

export default CreateUserInput;

@Resolver()
export class TesteResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  uptime() {
    return 'Testando...';
  }

  @Mutation(() => String)
  async createUser(
    @Args('input', { type: () => CreateUserInput })
    input: CreateUserInput
  ): Promise<string> {
    await this.userService.createProject(input);
    return 'OK';
  }
}
