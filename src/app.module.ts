import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseService } from './shared/database/database.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [DataBaseService],
})
export class AppModule {};
