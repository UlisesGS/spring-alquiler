import { Component, OnInit } from '@angular/core';
import { Peticion } from '../../peticion';
import { AlquilerService } from '../../alquiler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alquiler-form',
  templateUrl: './alquiler-form.component.html',
  styleUrls: ['./alquiler-form.component.css']
})
export class AlquilerFormComponent implements OnInit{

  peticion:Peticion=new Peticion();

  constructor(private alquilerService:AlquilerService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      let id =+ param.get('id');

      if(id){
        this.alquilerService.findById(id).subscribe(data=>{
          this.peticion=data;
          console.log(this.peticion);
          
        })
      }
    });
  }

}
