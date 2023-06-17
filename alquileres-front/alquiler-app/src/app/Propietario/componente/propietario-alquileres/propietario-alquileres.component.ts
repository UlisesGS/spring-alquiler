import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/Propiedad/propiedad';
import { Usuario } from 'src/app/Usuario/usuario';
import { PropietarioService } from '../../propietario.service';
import { PropiedadService } from 'src/app/Propiedad/propiedad.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-propietario-alquileres',
  templateUrl: './propietario-alquileres.component.html',
  styleUrls: ['./propietario-alquileres.component.css']
})
export class PropietarioAlquileresComponent implements OnInit {
titulo:string = 'Alquileres'
propietario:Usuario = new Usuario();
propiedades:Propiedad[];
foto: string[];

  constructor(private propietarioService:PropietarioService,
    private propiedadService:PropiedadService,
    private  httpClient:HttpClient){}
  ngOnInit(): void {
    this.propietario= JSON.parse( localStorage.getItem("usuario"))

    

    this.propiedadService.buscarPropiedad(this.propietario.id).subscribe(data => {
      console.log(data);
      this.propiedades = data as Propiedad[];
      console.log(this.propiedades);

      this.propiedades.forEach(datas => {
        this.httpClient.get('http://localhost:8080/propiedad/uploads/img'+`${datas.id}`).subscribe((data:any) =>{
        this.foto=data.url;
    })
      })
    });

    
  }

}
