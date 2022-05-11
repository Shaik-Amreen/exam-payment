import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-supply-exams',
  templateUrl: './apply-supply-exams.component.html',
  styleUrls: ['./apply-supply-exams.component.css']
})
export class ApplySupplyExamsComponent implements OnInit {

  applicationForm : FormGroup;errorMsg='';applyAllMode=false;subjects:any[]=[];amount=0;paymode=false


 constructor(private http:HttpClient) { 
   this.http.post<any>('http://localhost:4000/studentdetails/examdetails',{ 
     examname:localStorage.getItem('examname'),type:localStorage.getItem('type'),rollno:"1"}).subscribe(
     res=>{
      let s=[];this.paymode=false;
      for(let c of res.subjects){s.push({'subjectname':c.subjectname,'subjectcode':c.subjectcode,'amount':c.amount})};this.subjects=s;
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
        },
     err=>console.log(err)
   )


 }
 
 ngOnInit(): void {
   this.form()
 }

 //application form

 private form(){
    let subjectnames=new FormArray([])
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

 //add or remove subjects

changeSubjects(subs : any)
{
    this.errorMsg=''
    let index=this.applicationForm.value.subjects.findIndex((s : any)=>s.subjectcode==subs.subjectcode);
    if(index!=-1)
    {
        (<FormArray>this.applicationForm.get('subjects')).removeAt(index);
        if(this.amount!=0){this.amount=this.amount-subs.amount}
    }
    else
    {
        (<FormArray>this.applicationForm.get('subjects')).push(new FormGroup({
        'subjectcode':new FormControl(subs.subjectcode),
        'subjectname':new FormControl(subs.subjectname)
        }));
        this.amount=this.amount+subs.amount
    }
}

 //get subjects selected

 get controls() { 

   return (<FormArray>this.applicationForm.get('subjects')).controls;
 }


//change mode of all or particular subject

 changeSelected(){
  this.errorMsg=''
   this.applyAllMode=!this.applyAllMode
   if(this.applyAllMode==true)
   {
     this.applicationForm.value.subjects=[];
     this.applicationForm.value.subjects.push(...this.subjects);
     this.amount=0;
     for(let c of this.subjects){this.amount=this.amount+c.amount}
   }
   else
   {
     this.amount=0;
     this.applicationForm.value.subjects=[];
   }
 }


 //payment 
 
 payamount()
{
  if(this.applicationForm.value.subjects.length==0){this.errorMsg='Select atleast one subject'}
  else{history.state.amount=this.amount;history.state.type='supply';this.paymode=true}
}

 


}
