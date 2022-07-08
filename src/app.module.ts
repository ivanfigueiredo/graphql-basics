import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE_NAME,
  MONGO_PORT,
  MONGO_HOST
} from './config/env';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${MONGO_HOST}:${MONGO_PORT}`, {
      user: `${MONGO_USER}`,
      pass: `${MONGO_PASSWORD}`,
      dbName: `${MONGO_DATABASE_NAME}`
    }),
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
