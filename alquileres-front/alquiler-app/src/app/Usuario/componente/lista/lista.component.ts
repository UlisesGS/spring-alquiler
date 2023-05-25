import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
titulo:string='Lista Usuarios';
usuarios:Usuario[]=[];


  constructor(private service:UsuarioService){}
  ngOnInit(): void {
this.todos();
  }
   eliminar(id:number){
    Swal.fire({
      title: 'Eliminar',
      text: "Esta seguro que desea eliminar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.eliminar(id).subscribe(data=>{
          Swal.fire(
            'Eliminado!',
            'El Usuario fue eliminado con exito',
            'success'
          )
          this.usuarios.filter(u=>u.id==id);
          this.todos()
        })

      }
    })

  }
public todos(){
  this.service.findAll().subscribe(data=>{
    this.usuarios=data;
  })
}


}
