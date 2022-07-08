import { Inject } from '@nestjs/common';
import { IUserRepository } from '../../repository/user.repository';
import { CreateUserDto } from './create-user.dto';

export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: IUserRepository
  ) {}

  async execute(dto: CreateUserDto): Promise<void> {
    try {
      await this.userRepo.save(dto);
    } catch (err) {
      console.log(err);
    }
  }
}
