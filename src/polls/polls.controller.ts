import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Get()
  async getTotalPolls() {
    return await this.pollsService.getTotalPolls();
  }

  @Get(':id')
  async getRequestedPoll(@Param('id') id: number) {
    return await this.pollsService.getRequestedPoll(+id);
  }

  @Post(':id')
  async insertProvidedResponse(
    @Param('id') id: number,
    @Body() res: Promise<any>,
  ) {
    return await this.pollsService.insertProvidedResponse(+id, res);
  }

  // @Get(':id/results')
  // async getLiveResponses(@Param('id') id: number) {
  //   return await this.pollsService.getLiveResponses(+id);
  // }
}
