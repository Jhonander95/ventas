import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";     
import { BehaviorSubject, Observable } from "rxjs";
import { Response } from "../models/response";
import { Usuario } from "../models/usuario";
import { map } from "rxjs/operators";
import { ExpressionType } from "@angular/compiler";
import { Login } from "../models/login";

const httpOption = {
    headers: new HttpHeaders({
      'Contend-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
})

export class ApiauthService {
    url: string ='http://localhost:7200/api/user/login';

    private usuarioSuject: BehaviorSubject<Usuario>;

     public get usuarioData(): Usuario{
      return this.usuarioSuject.value;
    } 
    
    constructor( private _http: HttpClient){
     this.usuarioSuject = 
      new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario'))); 
    }

    login(email: string, password: string): Observable<Response>{
        //return this._http.post<Response>(this.url, {email, password}, httpOption);
         return this._http.post<Response>(this.url, {email, password}, httpOption).pipe(
          map(res => {
            if (res.exito === 1){
              const usuario: Usuario = res.data;
              localStorage.setItem('usuario', JSON.stringify(usuario));
              this.usuarioSuject.next(usuario);
            }

            return res; 
          })
        ); 
    }

     logout(){
      localStorage.removeItem('usuario');
      this.usuarioSuject.next(null);
    } 
}