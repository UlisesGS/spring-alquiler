import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../propiedad';

@Component({
  selector: 'app-propiedad-form',
  templateUrl: './propiedad-form.component.html',
  styleUrls: ['./propiedad-form.component.css']
})
export class PropiedadFormComponent implements OnInit {
  titulo:string ="Formulario de Propiedades"
  propiedad:Propiedad= new Propiedad()
  errores:any;
  constructor(){}
  ngOnInit(): void {

  }

}
