import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentshome',
  templateUrl: './studentshome.component.html',
  styleUrls: ['./studentshome.component.css']
})

export class StudentshomeComponent implements OnInit {

  regdata : string[]=[];supdata:string[]=[];regenddate : string[]=[];supenddate:string[]=[];
  constructor(private router : Router,private http :HttpClient) {
    this.http.post<any>('http://localhost:4000/studentdetails/yearsem',{rollno:'1'}).subscribe(
      res=>{
        for(let c of res.message.regular){if(!this.regdata.includes(c.examname)){this.regdata.push(c.examname);this.regenddate.push(c.enddate)}}
        for(let c of res.message.supply){if(!this.supdata.includes(c.examname)){this.supdata.push(c.examname);this.supenddate.push(c.enddate)}}},
      err=>console.log(err)
    )

   }

  ngOnInit(): void {
  }




//regular exam
  applyForExam(d:any,type:any){
    localStorage.setItem('examname',d);localStorage.setItem('type',type);let today=new Date().setHours(0,0,0).toString()
    this.http.post<any>('http://localhost:4000/subjects/getRegularData',{rollno:'1',examname:localStorage.getItem('examname')}).
    subscribe(res=>{console.log(res);if(res.details==null){
                                       if(today<=res.details.enddate){this.router.navigate(["/student/application"])}
                                       else{this.router.navigate(["/student/deadline"])}}
                                    else{this.router.navigate(['/student/hallticket'])}},
             err=>console.log(err))
  }



//supply exam
  applyForSupplyExam(d :any,type:any){
    localStorage.setItem('examname',d);localStorage.setItem('type',type);let today=new Date().setHours(0,0,0).toString()
    this.http.post<any>('http://localhost:4000/subjects/getSupplyData',{rollno:'1',examname:localStorage.getItem('examname')}).
    subscribe(res=>{console.log(res,new Date(),new Date(res.details.enddate));if(res.details==null){if(today<=res.details.enddate){this.router.navigate(["/student/supplyapplication"])}
                                                           else{this.router.navigate(["/student/deadline"])}}
                                      else{this.router.navigate(['/student/hallticket'])}},
             err=>console.log(err))
    
  }

  

}
