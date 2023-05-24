import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{

  titulo:string="Creacion de usuario";
  public usuario: Usuario=new Usuario();
  public errores: any;

  constructor(private usuarioService: UsuarioService,
    private router: Router,){

  }

  ngOnInit(): void {
   
  }


  save(): void{
    this.usuarioService.save(this.usuario).subscribe(user => {
      this.router.navigate(['/usuarios'])
      Swal.fire('Nuevo usuario', `El usuario ${user.username} creado con exito`, 'success')
    },
    err => {
      /*
                    /*OPCIONAL: ESPECIFICAMOS DE QUE TIPO DE DATO ES
        this.errores = err.error.errors as string[];
        console.error('Codigo del error desde el backend: '+ err.status);
        console.error(err.error.errors);
       */
      if(err.status==404){
        console.log(err);
       this.errores=err.error;
        Swal.fire('Error: ', `Error al crear el Usuario  el error es ${err.message}`,'error')

      }
      }
    );
  }
}
