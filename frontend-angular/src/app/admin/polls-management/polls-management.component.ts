import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polls-management',
  templateUrl: './polls-management.component.html',
  styleUrls: ['./polls-management.component.css']
})
export class PollsManagementComponent {
  response: any;
  allPolls: any;
  userData: any;
  pollStatus:any;
  openform:boolean=false;
  submitted:boolean=false;

  constructor(private pollService: PollService, private router: Router){}
  
  getData(){
    return this.pollService.PollsManagemet(this.allPolls).subscribe((response: any) =>{
      this.response = response;
      this.userData = this.response.rows;
    })
  }

  openForm(){
    this.openform= !this.openform;
  }

makeLive(){
  this.submitted = true;
  
  // this.pollService.update(this.)
  // return this.pollService.update(this.pollStatus).subscribe((response) => {
  //   this.response = response;
  //   console.log(this.response)
  // })
}
  ngOnInit(){
    this.getData();
   }
}