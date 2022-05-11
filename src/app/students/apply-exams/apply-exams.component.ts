import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-exams',
  templateUrl: './apply-exams.component.html',
  styleUrls: ['./apply-exams.component.css']
})
export class ApplyExamsComponent implements OnInit {
  applicationForm : FormGroup;applicationFormData : FormGroup;
amount=0;paymode=false;

  constructor(private router:Router,private http:HttpClient) { 
    this.http.post<any>('http://localhost:4000/studentdetails/examdetails',{ examname:localStorage.getItem('examname'),type:localStorage.getItem('type'),rollno:"1"}).subscribe(
      res=>{let s=[];this.amount=res.subjects[0].amount;
        this.paymode=false;
        for(let c of res.subjects){s.push({'subjectname':c.subjectname,'subjectcode':c.subjectcode})};
        this.applicationForm.controls['enddate'].setValue(res.subjects[0].enddate);
        this.applicationForm.controls['examname'].setValue(res.subjects[0].examname);
        this.applicationForm.controls['name'].setValue(res.student.name);
        this.applicationForm.controls['mail'].setValue(res.student.mail);
        this.applicationForm.controls['coursename'].setValue(res.student.coursename);
        this.applicationForm.controls['departmentname'].setValue(res.student.departmentname);
        this.applicationForm.controls['rollno'].setValue(res.student.rollno);
        this.applicationForm.controls['section'].setValue(res.student.section);
        this.applicationForm.controls['sem'].setValue(res.student.sem);
        this.applicationForm.controls['year'].setValue(res.student.year);
        this.applicationForm.controls['aadharnumber'].setValue(res.student.aadharnumber);
        this.applicationForm.controls['subjects'].setValue(s)
            },
      err=>console.log(err)
    )


  }
  
  ngOnInit(): void {
    this.form()
  }

  
  private form(){

    this.applicationFormData=new FormGroup({
      'subjectcode':new FormControl('',Validators.required),
      'subjectname':new FormControl('',Validators.required),
    })
    let subjectnames=new FormArray([])
   subjectnames.push(this.applicationFormData)
    this.applicationForm=new FormGroup({
      'paymentmode':new FormControl('card',Validators.required),
      'enddate':new FormControl('',Validators.required),
      'examname':new FormControl('',Validators.required),
      'name':new FormControl('',Validators.required),
      'mail':new FormControl('',Validators.required),
      'rollno':new FormControl('',Validators.required),
      'coursename':new FormControl('',Validators.required),
      'year':new FormControl('',Validators.required),
      'sem':new FormControl('',Validators.required),
      'departmentname':new FormControl('',Validators.required),
      'section':new FormControl('',Validators.required),
      'aadharnumber':new FormControl('',Validators.required),
      'phonenumber':new FormControl(''),
      'date':new FormControl(new Date()),
      'subjects':subjectnames
    })
    
   
  }


//payment  

payamount(){
  history.state.amount=this.amount;
   this.paymode=true
}

//get subjects
  get controls() { 
    return (<FormArray>this.applicationForm.get('subjects')).controls;
  }

}
