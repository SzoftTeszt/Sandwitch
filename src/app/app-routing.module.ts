import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
import { ForgotpaswordComponent } from './forgotpasword/forgotpasword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';

const routes: Routes = [
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  {path:"sandwich", component:SandwichListComponent},
  {path:"forgotpassword", component:ForgotpaswordComponent},
  {path:"verifyemail", component:VerifyemailComponent},
  {path:" ", component:SandwichListComponent},
  {path:"**", component:SandwichListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
