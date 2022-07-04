import { Module } from '@nestjs/common';
import { TesteResolver } from './teste.input';

@Module({
  imports: [],
  providers: [TesteResolver]
})
export class UserModule {}
