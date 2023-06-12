import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private urlEndPoint:string = 'http://localhost:8080/usuario';
  constructor(private http: HttpClient, private router: Router) { }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>>{
    
    let formData = new FormData();
                  /*VA EL MISMO NOMBRE QUE LE PONEMOS EN EL BACK*/
    formData.append("archivo", archivo);
    formData.append("id", id);

    const req = new HttpRequest('POST', `${this.urlEndPoint}/foto/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      catchError(e => {
        return throwError( () => e );
      })
    );
  }
}
