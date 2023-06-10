import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FotoService } from 'src/app/Foto/foto.service';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{

  titulo:string="Creacion de usuario";
  public usuario: Usuario=new Usuario();
  public errores: any;
  private fotoSeleccionada: File;
  public progreso: number = 0;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fotoService: FotoService,
    ){

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      let id: number = +params.get('id');

      if(id){
        this.titulo="Editar usuario"
        this.usuarioService.findById(id).subscribe( data => {
          this.usuario=data;
        });
        
      }
  });
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


  update(): void{
    this.usuarioService.update(this.usuario).subscribe(user =>{
      
      this.router.navigate(['/usuarios'])
      
      Swal.fire('Actualizado con exito', `El usuario ${user.username} actualizado correctamente`, 'success')
    },
    err => {
      if(err.status==404){
        console.log(err);
       this.errores=err.error;
        Swal.fire('Error: ', `Error al editar el Usuario  el error es ${err.message}`,'error')

      }
      }
    )
  }

}
