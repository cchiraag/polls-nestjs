import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polls-management',
  templateUrl: './polls-management.component.html',
  styleUrls: ['./polls-management.component.css'],
})
export class PollsManagementComponent {
  response: any;
  openform: boolean = false;
  submitted: boolean = false;
  enteredValue: string = '';
  toNumber: number = 0;
  id: any;

  constructor(private pollService: PollService, private router: Router) {}

  getData() {
    return this.pollService.getPolls().subscribe((response: any) => {
      this.response = response;
      console.log(this.response);
    });
  }

  openForm() {
    this.openform = !this.openform;
  }

  saveThePollIdEntered(eventData: Event) {
    //console.log((<HTMLInputElement>eventData.target).value);
    return (this.enteredValue = (<HTMLInputElement>eventData.target).value);
  }

  makeLive() {
    this.submitted = true;
    console.log(this.enteredValue);
    this.toNumber = Number(this.enteredValue);
    console.log(this.toNumber);
    this.pollService.updateStatus(this.toNumber).subscribe((result) => {
      // this.id = result
      // console.log(this.toNumber)
      console.log(result);
      // return this.id;
    });
    return this.router.navigate(['/polls']);

    //step1 convert this.enteredValue from string to int
    // then return that integer

    // this.pollService.update(this.)
    // return this.pollService.update(this.pollStatus).subscribe((response) => {
    //   this.response = response;
    //   console.log(this.response)
    // })
  }
  ngOnInit() {
    this.getData();
  }
}
