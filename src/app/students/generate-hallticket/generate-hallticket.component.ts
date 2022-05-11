import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-generate-hallticket',
  templateUrl: './generate-hallticket.component.html',
  styleUrls: ['./generate-hallticket.component.css']
})
export class GenerateHallticketComponent implements OnInit {

   details={rollno:'',examname:'',coursename:'',departmentname:'',name:''}
  emptymode=false;subjectdetails=[{subjectname:'',subjectcode:''}]

  constructor(private router:Router,private http :HttpClient) 
  {
    this.emptymode=false;
    if(localStorage.getItem('type')=="regular"){
    this.http.post<any>('http://localhost:4000/subjects/getRegularData',{rollno:'1',examname:localStorage.getItem('examname'),enddate:localStorage.getItem('enddate')}).
    subscribe(res=>{this.details=res.details;this.subjectdetails=res.subjects;this.emptymode=true},
    err=>console.log(err))}
    else if(localStorage.getItem('type')=="supply"){
      this.http.post<any>('http://localhost:4000/subjects/getSupplyData',{rollno:'1',examname:localStorage.getItem('examname'),enddate:localStorage.getItem('enddate')}).
      subscribe(res=>{this.details=res.details;this.subjectdetails=res.subjects;this.emptymode=true},
      err=>console.log(err))
    }
  }



  @ViewChild('hallticket',{static:false}) hallticket !: ElementRef;

  
  downloadPDF()
  {
    html2canvas(this.hallticket.nativeElement,{scale: 2}).then(canvas => {
    // Few necessary setting options
    var imgWidth =350;
    var imgHeight = canvas.height * imgWidth / canvas.width;

    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('new-file.pdf'); // Generated PDF
    });
  }

  ngOnInit(): void {
  }

}
