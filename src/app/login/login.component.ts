import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "../services/apiauth.service";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Login } from "../models/login";


@Component({ 
    templateUrl: 'Login.component.html',
    selector: 'app-login',
    styleUrls: ['./login.component.scss'] 
})

export class LoginComponent implements OnInit{

 /*    public password: string;
    public email: string; */

    

    public loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    }); 


    
    constructor(public apiauthService: ApiauthService,
                private router: Router,
                private fb: FormBuilder,
        ){
             if(this.apiauthService.usuarioData){
                this.router.navigate(['/']);
            }
 
    }
    
    ngOnInit(){
        
    }

    login(){
        /* console.log(this.loginForm.value)
        console.log(this.loginForm) */
        let email = this.loginForm.value.email
        let password = this.loginForm.value.password
          this.apiauthService.login(email, password).subscribe(response => {
            if(response.exito === 1){
                this.router.navigate(['/']);
                console.log(response.exito);
            }
        });    
      
    }
}