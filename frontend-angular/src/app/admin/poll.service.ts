import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  url1 ='http://localhost:3000/polls';
 

  constructor(private http: HttpClient) { }

  getPolls(){
    return this.http.get(this.url1);
  }
  
  getSpecificPollPageData(id:number){
    return this.http.get('http://localhost:3000/polls/'+id);
   }

  // update(pollStatus:any){
  //   return this.http.put<any>(this._url1, pollStatus);
  // }

  // PollsManagemet(allPolls:any){
  //   return this.http.get<any>(this._url1, allPolls);
  // }
 
}
