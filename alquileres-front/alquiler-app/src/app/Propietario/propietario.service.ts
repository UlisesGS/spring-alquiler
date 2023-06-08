import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  url:string= 'http://localhost:8080/alquiler';
  constructor(private http:HttpClient) { }
  public findByPropietario(id:number):Observable<any>{
    return this.http.get<any>(this.url);
  }

}
