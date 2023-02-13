import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../poll.service';
import {
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Socket } from 'socket.io';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.css']
})
export class PollPageComponent {
  response: any;
  specificPoll: any;
  subroute:any;
  poll_id:any;
  specificPollData:any = 0;
  userdata: any;
  

constructor(private pollService: PollService, private router: ActivatedRoute, private socket: Socket){ }

getData(){
  this.subroute = this.router.params.subscribe(params =>{
    return this.pollService.pollPage(this.specificPoll).subscribe((response)=>{
      this.response = response;
            this.specificPoll = this.response.rows;
            this.poll_id = params['poll_id']
          //  console.log(this.poll_id)
          this.specificPollData = this.specificPoll[this.poll_id-1]
            // if(this.poll_id == this.specificPoll[this.poll_id-1].poll_id){
            //  // console.log(this.poll_id)
            //  // console.log(this.specificPoll[this.poll_id-1])
            //  this.specificPollData = this.specificPoll[this.poll_id-1]
            // }           
    })
  })
}

userData(data: any){
  this.userdata = data;
}

ngOnInit(){

  // to setup connection
  this.socket.on('resFromServer', (data: any) => {
    this.userData(data);
    // console.log('Connected to Socket');
  });
 }
}
 