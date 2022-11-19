import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogClienteComponent } from './cliente/dialog/dialogcliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogDeleteComponent } from './comon/delete/dialogdelete.component';
import { LoginComponent } from './login/login.component'; 
import { JwtInterceptor } from './security/jwt.interceptor'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    LoginComponent,
    DialogClienteComponent,
    DialogDeleteComponent
    
   /*  MatSidenavModule */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
