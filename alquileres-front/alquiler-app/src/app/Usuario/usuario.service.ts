import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private  url:string='http://localhost:8080/usuario'
  private header = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }
  public findAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }
}
