import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peticion } from './peticion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private  urlPeticion:string='http://localhost:8080/peticion'
  private header = new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient,
    ) { }

    public save(peticion: Peticion):Observable<Peticion>{
      return this.http.post<Peticion>(this.urlPeticion,peticion);
    }

    public findById(id: number):Observable<Peticion>{
      return this.http.get<Peticion>(`${this.urlPeticion}/${id}`)
    }
}
