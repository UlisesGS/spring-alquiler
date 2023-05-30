import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propiedad } from './propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private  url:string='http://localhost:8080/propiedad'
  private header = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) {}

  public findAll():Observable<Propiedad[]>{
    return this.http.get<Propiedad[]>(this.url);
  }

  public save(propiedad:Propiedad): Observable<Propiedad>{
    console.log(propiedad);
    

    return this.http.post<Propiedad>(this.url,propiedad);
  }

  public delete(id:number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  public findById(id:number): Observable<Propiedad>{
    return this.http.get<Propiedad>(`${this.url}/${id}`);
  }

  public update(propiedad:Propiedad): Observable<Propiedad>{
    return this.http.put<Propiedad>(`${this.url}/${propiedad.id}`, propiedad, {headers: this.header});
  }
}
