import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-polls-management',
  templateUrl: './polls-management.component.html',
  styleUrls: ['./polls-management.component.css'],
})
export class PollsManagementComponent implements OnInit {
  response: any;
  openform: boolean = false;
  submitted: boolean = false;
  enteredValue: string = '';
  toNumber: number = 0;
  id: any;
  buttonClicked: boolean = false;

  constructor(private pollService: PollService, private router: Router) {
    console.log('Polls management constructor');
  }

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

  async makeLive() {
    this.submitted = true;
    this.buttonClicked = true;
    console.log(this.enteredValue);
    this.toNumber = Number(this.enteredValue);
    console.log(this.toNumber);

    await firstValueFrom(this.pollService.updateStatus(this.toNumber));
    console.log('Completed application call');
    await this.router.navigate(['/polls']);
    return;
    // .subscribe((result) => {
    //   // this.id = result
    //   // console.log(this.toNumber)
    //   console.log(result);
    //   // return this.id;
    // });

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
