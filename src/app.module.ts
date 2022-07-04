import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: false,
      sortSchema: true,
      playground: true,
      cors: {
        Credential: true,
        origin: true
      },
      context: async (context: any) => {
        return { ...context };
      },
      introspection: true
    }),
    UserModule
  ],
  controllers: [AppController]
})
export class AppModule {}
