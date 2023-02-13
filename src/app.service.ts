import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poll } from './polls/entities/poll.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Poll)
    private pollsRepository: Repository<Poll>,
  ) {}

  // to get list of total polls present in database (from polls table)
  async getPolls(): Promise<Poll[]> {
    return await this.pollsRepository.find();
  }

  // to update the status of the poll (from polls table)
  async changeStatus(res: Poll) {
    return await this.pollsRepository.update(
      { id: res.id },
      { status: res.status },
    );
  }
}
