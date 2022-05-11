import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor
} from '@angular/common/http';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class TokenInterceptorServiceInterceptor implements HttpInterceptor {

  constructor(private injector : Injector) {}

  intercept(req :any,next : any){
    let authservice=this.injector.get(AuthserviceService)
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
