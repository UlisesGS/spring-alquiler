import { Component, Input } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import Swal from 'sweetalert2';
import { FotoService } from 'src/app/Foto/foto.service';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from 'src/app/Foto/modal.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent {
  @Input() usuario: Usuario;

  titulo: string = "Detalles del cliente";
  private fotoSeleccionada: File;
  public progreso: number = 0;

  constructor(private usuarioService: UsuarioService,
    private fotoService: FotoService,
    public modalService: ModalService){}

  ngOnInit() {}


  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }


  subirFoto(){
    if(!this.fotoSeleccionada){
       Swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else{
    this.fotoService.subirFoto(this.fotoSeleccionada, this.usuario.id)
    .subscribe(event => {
                  /*VALIDA EL VALOR Y EL TIPO DE DATO*/
      if(event.type === HttpEventType.UploadProgress){
        this.progreso = Math.round((event.loaded/event.total)*100);
      }else if(event.type === HttpEventType.Response){
        let response: any = event.body;
        console.log(response);

        this.usuario = response.usuario as Usuario;
      }

      //this.cliente = cliente;
    //
    });

    Swal.fire('La foto se ha subido completamente!', `La foto se ha subido con exito: ${this.usuario.foto}`, 'success');
  }
}


cerrarModal(){
  this.modalService.cerrarModal();
  this.fotoSeleccionada = null;
  this.progreso = 0;
}
}
