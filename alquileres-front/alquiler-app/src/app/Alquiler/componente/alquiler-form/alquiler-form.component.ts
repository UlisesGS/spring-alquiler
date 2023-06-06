import { Component, OnInit } from '@angular/core';
import { Peticion } from '../../peticion';
import { AlquilerService } from '../../alquiler.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Alquiler } from '../../alquiler';

@Component({
  selector: 'app-alquiler-form',
  templateUrl: './alquiler-form.component.html',
  styleUrls: ['./alquiler-form.component.css']
})
export class AlquilerFormComponent implements OnInit{

  peticion:Peticion=new Peticion();
  alquiler:Alquiler = new Alquiler()

  constructor(private alquilerService:AlquilerService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      let id =+ param.get('id');

      if(id){
        this.alquilerService.findById(id).subscribe(data=>{
          this.peticion=data;
          this.alquiler.peticion=data;
          console.log(this.peticion);

        })
      }
    });
    console.log(this.peticion);

  }
alquilarSave(){
  console.log(this.alquiler);
  this.alquilerService.saveAlquiler(this.alquiler).subscribe(data=>{
    Swal.fire('Creado:', 'la peticion de Alquiler fue enviada con exito', 'success');
  },
  e=>{
    console.log(e);

  }
  )


}
}
