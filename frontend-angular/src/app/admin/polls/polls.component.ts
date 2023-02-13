import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../poll.service';


@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent {
  response: any;
  userData: any;
  allPolls: any;

constructor(private pollService: PollService, private router: Router){ }

getData(){
  return this.pollService.allPolls(this.allPolls).subscribe((response) =>{
    this.response = response;
    this.userData = this.response.rows;
  })
}

moveToPollPage(){
 return this.pollService.allPolls(this.allPolls).subscribe((response) =>{
    for(let i=0;i<10;i++){
      if(this.response.rows[i].status === "Active"){
         this.router.navigate(['/polls/'+(i+1)]);
      }
    }
    console.log(this.response.rows[0])
  })
}

//  getData(){
//     return this.http.get('http://localhost:3000/polls').subscribe((response) => {
//       this.response = response;
//       this.userData = this.response.rows;
//       //console.log(this.userData[0].poll_id )
//       //console.log(a)
//       //console.log(this.userData[a].status)

//       // this.userData[0].status

//       // for(let i =0; i<3; i++)
//       // {
//       //   var a= i.toString()
//       //   //console.log(this.userData[a].poll_id)
//       //   if(this.userData[a].status != "Active"){
//       //   this.b= this.userData[a].poll_id
//       //   }
//       //    //this.b=false;
//       // }
      
     
//       // for(let i =0; i<2; i++)
//       // {
//       //   var a= i.toString()
//       //   console.log(this.userData[a].status)
//       //   if(this.userData[a].status != "Active"){
//       //    console.log("working") 
//       //   // this.disableTheButton = true;
//       //    console.log(this.userData[a])
//       //   }
//       // }

//       // for(let i =0; i<10; i++)
//       // {
//       //   console.log(this.userData["0"].status)
//       //   console.log(this.userData["1"].status)
//       // }

//       // console.log(this.userData)
//       // if(this.userData["0"].status != "Active"){
//       //    console.log("working") 
//       //    this.disableTheButton = true;
//       // }

//      })
//   }

 ngOnInit(){
  this.getData();
 }

}
