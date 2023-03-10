import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { HttpClientModule } from '@angular/common/http';
import { PollPageComponent } from './poll-page/poll-page.component';
import { PollsManagementComponent } from './polls-management/polls-management.component';




@NgModule({
  declarations: [
    PollsComponent,
    PollPageComponent,
    PollsManagementComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
