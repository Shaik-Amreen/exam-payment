import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { LoginComponent } from './login/login.component';
import { PaymentGatewayComponent } from './students/payment-gateway/payment-gateway.component';
import { ApplyExamsComponent } from './students/apply-exams/apply-exams.component';
import { StudentsComponent } from './students/students.component';
import { StudentshomeComponent } from './students/studentshome/studentshome.component';
import { GenerateHallticketComponent } from './students/generate-hallticket/generate-hallticket.component';
import { ApplySupplyExamsComponent } from './students/apply-supply-exams/apply-supply-exams.component';
import { DeadlineComponent } from './students/deadline/deadline.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'student',component:StudentsComponent,
  canActivate:[AuthguardGuard],children:[
    {path:'',component:StudentshomeComponent,pathMatch:'full'},
    {path:'application',component:ApplyExamsComponent},
    {path:'deadline',component:DeadlineComponent},
    {path:'supplyapplication',component:ApplySupplyExamsComponent},
    {path:'payment',component:PaymentGatewayComponent},
    {path:'hallticket',component:GenerateHallticketComponent},
    
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
