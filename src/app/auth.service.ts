import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = new Subject<boolean>();
  loggedUser=false;
  userData:any;

  constructor(private afAuth:AngularFireAuth, private router:Router)
   {
      this.afAuth.authState.subscribe(
        (user)=>{
          if (user) {
            this.loggedUser=true;
            this.userData=user;
            console.log(this.userData);
          }
          else {
            this.loggedUser=false;
            this.userData=null;
            console.log(this.userData);
          }
          this.isLogged.next(this.loggedUser);
        }
      )
   }

  signUp(email:string, password:string){
    console.log(email,";", password);
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  googleAuth(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider())
  }
  sendVerificationEmail(){
    this.afAuth.currentUser
      .then((user)=>user?.sendEmailVerification())
      .then(()=>this.router.navigate(['/verifyemail']))
      .catch((error)=>alert(error.message))
  }

  signOut()
  {
    return this.afAuth.signOut();
  }

  signIn(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  forgotPassword(email:string){
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
