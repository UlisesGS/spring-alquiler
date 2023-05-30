import { Component, OnInit } from "@angular/core";
import { Propiedad } from "../../propiedad";
import { PropiedadService } from "../../propiedad.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-propiedad-lista',
    templateUrl: './propiedad-lista.html',
    styleUrls: ['./propiedad-lista.css']
  })

  export class PropiedadListaComponent implements OnInit{
    propiedades:Propiedad[]=[];
    propiedadSeleccionada: Propiedad;

    constructor(private service:PropiedadService){}

    ngOnInit(): void {
        this.todos();
    }

    public todos(){
        this.service.findAll().subscribe(data=>{
          console.log(data);

          this.propiedades=data;
        })
      }
      public delete(id:number):void{
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

            this.service.delete(id).subscribe(data=>{
              Swal.fire(
                'Eliminado!',
                'La propiedad fue eliminada con exito',
                'success'
              )
            // this.usuarios.filter(u=>u.id==id);
              this.todos()
            })

          }
        })
      }


  }
