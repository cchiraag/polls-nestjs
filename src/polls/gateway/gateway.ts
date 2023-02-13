import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PollsService } from '../polls.service';

// access available to all the urls
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class Gateway implements OnModuleInit {
  constructor(private readonly pollsService: PollsService) { }

  @WebSocketServer()
  server: Server;

  // to setup connection
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Connected to Socket');
    });
  }


  // to send the count of each option
  @SubscribeMessage('sendCountOfEachOption')
  async countForLiveResponses(@MessageBody() id: number) {
    const res = await this.pollsService.getLiveResponses(id);
    this.server.emit('resFromServer', res);
  }

}
