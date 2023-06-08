import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuario/usuario';

@Component({
  selector: 'app-propietario-alquileres',
  templateUrl: './propietario-alquileres.component.html',
  styleUrls: ['./propietario-alquileres.component.css']
})
export class PropietarioAlquileresComponent implements OnInit {
titulo:string = 'Alquileres '
propietario:Usuario = new Usuario();

  constructor(){}
  ngOnInit(): void {
    this.propietario= JSON.parse( localStorage.getItem("usuario"))
    console.log(this.propietario);

  }

}
