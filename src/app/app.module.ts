import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {google} from 'googleapis';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentshomeComponent } from './students/studentshome/studentshome.component';
import { ApplyExamsComponent } from './students/apply-exams/apply-exams.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthserviceService } from './authservice.service';
import { AuthguardGuard } from './authguard.guard';
import { TokenInterceptorServiceInterceptor } from './token-interceptor-service.interceptor';
import { PaymentGatewayComponent } from './students/payment-gateway/payment-gateway.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { GenerateHallticketComponent } from './students/generate-hallticket/generate-hallticket.component';
import { ApplySupplyExamsComponent } from './students/apply-supply-exams/apply-supply-exams.component';
import { DeadlineComponent } from './students/deadline/deadline.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentshomeComponent,
    ApplyExamsComponent,
    LoginComponent,
    PaymentGatewayComponent,
    GenerateHallticketComponent,
    ApplySupplyExamsComponent,
    DeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
   GooglePayButtonModule
  ],
  providers: [AuthserviceService,AuthguardGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorServiceInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
