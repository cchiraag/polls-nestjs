import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './entities/poll.entity';
import { Option } from './entities/option.entity';
import { Choice } from './entities/choice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poll]),
    TypeOrmModule.forFeature([Option]),
    TypeOrmModule.forFeature([Choice]),
  ],
  controllers: [PollsController],
  providers: [PollsService],
  exports: [PollsService],
})
export class PollsModule {}
