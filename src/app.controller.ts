import { Controller } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Controller()
export class AppController {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
