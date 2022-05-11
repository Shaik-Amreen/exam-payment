import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http : HttpClient) { }

  loginPost(user : any){
   return this.http.post<any>('http://localhost:4000/findoneusers',user)
  }

  loggedIn(){
   return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
