import { OnModuleInit } from "@nestjs/common";
import { Express } from "express";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { PollsService } from "../polls.service";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class Gateway implements OnModuleInit {

    constructor(private readonly pollsService: PollsService) {}

    @WebSocketServer()
    server: Server;

    // to setup connection
    onModuleInit() {
        this.server.on('connection', (socket) => {
            // console.log(socket.id);
            console.log('Connected');
        });
    }

    // to send the count of each option
    @SubscribeMessage('sendCountOfEachOption')
    async countForLiveResponses(@MessageBody() body: number) {
        const res = await this.pollsService.getLiveResponses(body);
        this.server.emit('resFromServer', res);
    }

}