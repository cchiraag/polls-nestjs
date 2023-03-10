import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Poll } from './polls/entities/poll.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './polls/entities/option.entity';
import { PollsModule } from './polls/polls.module';
import { Choice } from './polls/entities/choice.entity';
import { GatewayModule } from './polls/gateway/gateway.module';

const entities = [Poll, Option, Choice];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      // type: process.env.DB_TYPE as any,
      // host: process.env.DB_HOST,
      // port: parseInt(process.env.DB_PORT),
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,

      type: 'mysql',
      host: 'localhost',
      username: 'shruti',
      password: 'SanjivAparna@21',
      database: 'poll_sys',
      entities: entities,
      synchronize: true,
      // logging: true
    }),
    TypeOrmModule.forFeature([Poll]),
    PollsModule,
    GatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
