import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  url0 = 'http://localhost:3000';
  url1 = 'http://localhost:3000/polls';

  constructor(private http: HttpClient) {}

  getPolls() {
    return this.http.get(this.url1);
  }

  getSpecificPollPageData(id: number) {
    return this.http.get('http://localhost:3000/polls/' + id);
  }

  updateStatus(id: number) {
    return this.http.put(this.url0, { id: id });
  }

  submitThePollResponse(id: number, option_choice: number, user_id: string) {
    return this.http.post('http://localhost:3000/polls/' + id, {
      id: id,
      option_choice: option_choice,
      user_id: user_id,
    });
  }

  // update(pollStatus:any){
  //   return this.http.put<any>(this._url1, pollStatus);
  // }

  // PollsManagemet(allPolls:any){
  //   return this.http.get<any>(this._url1, allPolls);
  // }
}
