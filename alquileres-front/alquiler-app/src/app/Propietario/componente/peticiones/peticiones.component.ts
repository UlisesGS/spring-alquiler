import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/Alquiler/alquiler';
import { PropietarioService } from '../../propietario.service';
import { Usuario } from 'src/app/Usuario/usuario';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {
  alquileres:Alquiler[]=[];
  propietario:Usuario= new Usuario();

  constructor(private propietarioService:PropietarioService){}
  ngOnInit(): void {
this.propietario= JSON.parse(localStorage.getItem('usuario'))
this.propietarioService.findByPropietario(this.propietario.id).subscribe(data=>{
  this.alquileres=data;
})
  }

}
