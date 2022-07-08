/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './infra/db-mongo/use.repository';
import { Cat, CatSchema } from './infra/db-mongo/user.model';
import { TesteResolver } from './infra/graphql/user.resolver';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [
    TesteResolver,
    CreateUserUseCase,
    {
			provide: 'UserRepository',
			useClass: UserRepository
		},
    UserService
  ],
  exports: [UserService]
})
export class UserModule {}
