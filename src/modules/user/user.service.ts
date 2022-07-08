import { Inject } from '@nestjs/common';
import { CreateUserDto } from './use-cases/create-user/create-user.dto';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';

export class UserService {
  constructor(
    @Inject(CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async createProject(req: CreateUserDto) {
    await this.createUserUseCase.execute(req);
  }
}
