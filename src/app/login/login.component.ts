import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  name : string
  password : string

  constructor(private auth :AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    localStorage.setItem('token','amreen')
    this.router.navigate(['/student'])

    //   this.auth.loginPost({'gmail':this.name,'pwd':this.password}).subscribe(
    //   res=>localStorage.setItem('token',res.token),
    //   err=>console.log(err)
    // )

  }
 
  

}
