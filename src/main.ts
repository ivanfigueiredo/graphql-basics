import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(SERVER_PORT);
}
bootstrap()
  .then(() => console.log(`Application is running on: ${SERVER_PORT}`))
  .catch(console.error);
