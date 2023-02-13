import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { PollPageComponent } from './admin/poll-page/poll-page.component';
import { PollsManagementComponent } from './admin/polls-management/polls-management.component';
import { PollsComponent } from './admin/polls/polls.component';

const routes: Routes = [
  {path: 'polls', component: PollsComponent},
  {path: 'polls/:id', component: PollPageComponent},
  {path: 'pollsManagement', component: PollsManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
