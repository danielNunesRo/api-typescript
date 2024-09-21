import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/Users.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 1521,
      username: process.env.DB_USERNAME || 'system',
      password: process.env.DB_PASSWORD || '123',
      database: process.env.DB_NAME || 'FREEPDB1',
      entities: [UsersEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {};
