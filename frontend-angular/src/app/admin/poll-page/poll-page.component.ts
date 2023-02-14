import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../poll.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.css'],
})
export class PollPageComponent {
  response: any = 0;
  id: any;
  userdata: any;
  submitted = false;
  resultData: any;


  constructor(
    private pollService: PollService,
    private router: ActivatedRoute,
  ) {}

  pollForm = new FormGroup({
    options: new FormControl('', Validators.required)
   });

  getData() {
    return this.pollService
      .getSpecificPollPageData(this.id)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        //console.log(this.response["id"])
        //console.log(this.response.question);
      });
  }

  postPollPageResponse() {
    
    this.submitted = true
    if (this.pollForm.invalid) {
       return
    }
   const RandomlyGeneratedUserId= Math.random().toString(36).substring(2,12);
   const SelectedOptionNumber = Number(this.pollForm.value.options)

   this.pollService.submitThePollResponse(this.id, SelectedOptionNumber, RandomlyGeneratedUserId).subscribe((result)=>{
      this.resultData = result
      console.log(this.resultData)
   })
   //console.log(RandomlyGeneratedUserId);
   //console.log(this.pollForm.value);
   // const SelectedOptionNumber = Number(this.pollForm.value.options)
   //console.log(SelectedOptionNumber)
   // console.log(this.id)
  }

  get f(){
    return this.pollForm.controls;
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
  // userData(data: any) {
  //   this.userdata = data;
  // }
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.getData();
    this.postPollPageResponse();
  }
}
