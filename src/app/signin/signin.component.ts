import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email="";
  password="";

  constructor(private auth:AuthService, private router:Router){}

  signIn(email:string, password:string){
    this.auth.signIn(email, password)
    .then(()=>{
      console.log("Sikeres belépés");
      this.router.navigate(['/sandwich']);   
    })
    .catch((err)=>console.log("Hiba a belépésnél!", err.message))
  }

  googleAuth(){
    this.auth.googleAuth()
    .then(()=>{console.log("Sikeres googlebelépés");
          this.router.navigate(['/sandwich']);   
  })
    .catch((err)=>console.log("Google belépés hiba",err.message))

  }
}
