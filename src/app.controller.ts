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
  async changeStatus(@Body() body: any) {
    return await this.appService.changeStatus(body);
  }

  @Put()
  async revertStatus(@Body() body: any) {
    return await this.appService.revertStatus(body);
  }
}
