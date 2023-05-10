import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
loggedUser=false;
 constructor(private auth:AuthService, private router:Router){
  this.auth.isLogged.subscribe((u)=>this.loggedUser=u)
 }

 Logout(){
  this.auth.signOut().then(()=>this.router.navigate(['/signin']));
 }
}
