import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
loggedUser=false;
 constructor(private auth:AuthService){
  this.auth.isLogged.subscribe((u)=>this.loggedUser=u)
 }

 Logout(){
  this.auth.signOut();
 }
}
