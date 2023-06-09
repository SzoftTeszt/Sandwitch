import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpaswordComponent } from './forgotpasword/forgotpasword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
import { FormsModule } from '@angular/forms';
import { enviroment } from './enviroments';
import { UserComponent } from './user/user.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataCellComponent } from './data-cell/data-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotpaswordComponent,
    VerifyemailComponent,
    NavbarComponent,
    SandwichListComponent,
    UserComponent,
    DataListComponent,
    DataCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
