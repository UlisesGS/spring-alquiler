import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';

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

/*
  save(usuario:Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario, {headers: this.header}).pipe(
      map( (response: any) => response.usuario as Usuario ),
      catchError(e => {

        if(e.status == 400){
          return throwError( () => e );
        }

        console.error(e.error.mensaje);
        Swal.fire('Error al crear al usuario', e.error.mensaje, 'error');
        return throwError( () => e );
      })
    );
  }
  */
 save(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>(this.url,usuario);
 }
 delete(id:number):Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`);
 }
}
