import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../propiedad';
import { Usuario } from 'src/app/Usuario/usuario';
import { UsuarioService } from 'src/app/Usuario/usuario.service';
import { PropiedadService } from '../../propiedad.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedad-form',
  templateUrl: './propiedad-form.component.html',
  styleUrls: ['./propiedad-form.component.css']
})
export class PropiedadFormComponent implements OnInit {
  usuarios:Usuario[]=[]
  titulo:string ="Formulario de Propiedades"
  propiedad:Propiedad= new Propiedad()
  errores:any;
  constructor(private usuarioService: UsuarioService, private propiedadService:PropiedadService,private ruta:Router){}
  ngOnInit(): void {
this.usuarioService.findAll().subscribe(data=>{
  this.usuarios=data;
})
  }
  comparar(o1:Usuario, o2:Usuario):boolean{

      if (o1 === undefined && o2 === undefined) {
        return true;
      }

      return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
    }


  save(){
console.log(this.propiedad);

this.propiedadService.save(this.propiedad).subscribe(data=>{
  Swal.fire('Creado: ', `Propiedad ${this.propiedad.ubicacion} creada con exito`, 'success');
  this.ruta.navigate(['propiedad/lista'])

},err=>{
  if(err.status==400){
    console.log(err);
   this.errores=err.error;
    Swal.fire('Error: ', `Error al crear el Usuario  el error es ${err.message}`,'error')

  }
})
  }
  update()
{

}
}
