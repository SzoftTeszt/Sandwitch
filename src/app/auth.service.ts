import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = new Subject<boolean>();
  loggedUser=false;
  userData:any;

  constructor(private afAuth:AngularFireAuth, private router:Router,
    private http: HttpClient)
   {
      this.afAuth.authState.subscribe(
        (user)=>{
          if (user) {
            this.loggedUser=true;
            this.userData=user;

            this.userData.getIdToken().then((token:any) => {
              this.userData.token=token;
            }).catch((err:any) => {
              console.log("Hiba a token lekérésénél",err);
            });
            //console.log(this.userData);
          }
          else {
            this.loggedUser=false;
            this.userData=null;
            //console.log(this.userData);
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

  setCustomClaims(uid:any, claims:any){
    const url="http://localhost:3000/setCustomClaims";    
    // const uid= this.userData.uid;
    // const claims = {admin:true};

    const body={uid, claims};
    console.log("uid:",uid);
    console.log("Claims", claims);
    const headers =
    new HttpHeaders().set('Authorization',this.userData.token);
    this.http.post(url, body, {headers}).subscribe({
      next:()=>{console.log("A claims beállítása sikeres!")},
      error:(err)=>{console.log("Hiba a claims beállításakor: ", err)}
    })
  }

  getUsers(){
    const url="http://localhost:3000/users"; 
    const headers = 
    new HttpHeaders().set('Authorization',this.userData.token);
    return this.http.get(url, {headers})
  }

  getClaims(uid:string){
    const url=`http://localhost:3000/users/${uid}/claims`; 
    const headers = 
    new HttpHeaders().set('Authorization',this.userData.token);
    return this.http.get(url, {headers})
  }

}
