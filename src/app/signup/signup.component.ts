import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email="";
  password="";

  constructor(private auth:AuthService){}

  signUp(email:string, password:string){
    this.auth.signUp(email, password)
    .then(()=>{
      console.log("Sikeres regiszráció");
      this.auth.sendVerificationEmail()
    })
    .catch((err)=>console.log("Regisztrációs hiba", err.message))
  }

  googleAuth(){
    this.auth.googleAuth()
    .then(()=>console.log("Sikeres google regiszráció"))
    .catch((err)=>console.log("Google regisztrációs hiba",err.message))

  }
}
