import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peticion } from './peticion';
import { Observable } from 'rxjs';
import { Alquiler } from './alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private  urlPeticion:string='http://localhost:8080/peticion'
  private urlAlquiler:string = 'http://localhost:8080/alquiler'
  private header = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient,
    ) { }
//peticion
    public save(peticion: Peticion):Observable<Peticion>{
      return this.http.post<Peticion>(this.urlPeticion,peticion);
    }

    public findById(id: number):Observable<Peticion>{
      return this.http.get<Peticion>(`${this.urlPeticion}/${id}`)
    }


    //alquiler
    public saveAlquiler(alquiler:Alquiler):Observable<any>{
      return this.http.post<any>(this.urlAlquiler,alquiler);
    }
    public findAllAlquiler():Observable<any>{
      return this.http.get<any>(this.urlAlquiler);
    }
    public updateAlquiler(alquiler:Alquiler):Observable<any>{
      return this.http.put<any>(`${this.urlAlquiler}/${alquiler.id}`,alquiler);
    }
    public deleteAlquiler(id:number):Observable<any>{
      return this.http.delete<any>(`${this.urlAlquiler}/${id}`);


    }

}
