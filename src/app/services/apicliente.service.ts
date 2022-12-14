import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';


const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = 'http://localhost:7200/api/cliente';
  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Response>{
    return this.http.get<Response>(this.url);
  }

  add(cliente: Cliente): Observable<Response> {
    return this.http.post<Response>(this.url, cliente, httpOption);
  }

  edit(cliente: Cliente): Observable<Response> {
    return this.http.put<Response>(this.url, cliente, httpOption);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`);
  }
}
