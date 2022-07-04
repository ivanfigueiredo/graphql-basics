import { InputType, Field, Resolver, Query } from '@nestjs/graphql';

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
  @Query(() => String)
  uptime() {
    return 'Testando...';
  }
}
