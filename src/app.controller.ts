import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Poll } from './polls/entities/poll.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getPolls() {
    return await this.appService.getPolls();
  }

  @Put()
  async changeStatus(@Body() id: number) {
    return await this.appService.changeStatus(id);
  }

  @Put()
  async revertStatus(@Body() id: number) {
    return await this.appService.revertStatus(id);
  }
}
