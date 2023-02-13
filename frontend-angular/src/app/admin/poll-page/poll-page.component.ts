import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../poll.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.css'],
})
export class PollPageComponent {
  response: any = 0;
  id: any;
  a: any;
  userdata: any;
  //specificPoll: any;
  //specificPollData:any = 0;

  constructor(
    private pollService: PollService,
    private router: ActivatedRoute,
    private socket: Socket,
  ) {}

  getData() {
    return this.pollService
      .getSpecificPollPageData(this.id)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        //console.log(this.response["id"])
        console.log(this.response.question);
        this.a = this.response.question;
      });
  }

  // getData(){
  //   this.subroute = this.router.params.subscribe(params =>{
  //     return this.pollService.getSpecificPollPageData().subscribe((response)=>{
  //       this.response = response;
  //     })
  //  }
  // )}

  // getData(){
  //   this.subroute = this.router.params.subscribe(params =>{
  //     return this.pollService.pollPage(this.specificPoll).subscribe((response)=>{
  //       this.response = response;
  //             this.specificPoll = this.response.rows;
  //             this.poll_id = params['poll_id']
  //           //  console.log(this.poll_id)
  //           this.specificPollData = this.specificPoll[this.poll_id-1]
  //             // if(this.poll_id == this.specificPoll[this.poll_id-1].poll_id){
  //             //  // console.log(this.poll_id)
  //             //  // console.log(this.specificPoll[this.poll_id-1])
  //             //  this.specificPollData = this.specificPoll[this.poll_id-1]
  //             // }
  //     })
  //   })

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.getData();
    this.socket.on('resFromServer', (data: any) => {
      this.userData(data[0]);
    });
  }

  userData(data: any) {
    this.userdata = data;
    console.log(this.userdata);
  }
}
