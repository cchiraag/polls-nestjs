import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  _url1 ='http://localhost:3000/polls';
  _url2 ='http://localhost:3000/polls/:poll_id';

  constructor(private http: HttpClient) { }

  allPolls(allPolls:any){
    return this.http.get<any>(this._url1, allPolls);
  }
  
  pollPage(specificPoll:any){
    return this.http.get<any>(this._url2, specificPoll);
  }

  update(pollStatus:any){
    return this.http.put<any>(this._url1, pollStatus);
  }

  PollsManagemet(allPolls:any){
    return this.http.get<any>(this._url1, allPolls);
  }
 
}
