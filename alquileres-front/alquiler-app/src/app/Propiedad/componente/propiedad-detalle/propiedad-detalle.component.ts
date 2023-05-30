import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from '../../propiedad';
import { PropiedadService } from '../../propiedad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propiedad-detalle',
  templateUrl: './propiedad-detalle.component.html',
  styleUrls: ['./propiedad-detalle.component.css']
})
export class PropiedadDetalleComponent implements OnInit{
  propiedad: Propiedad=new Propiedad();



  constructor(private propiedadService: PropiedadService,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{

      let id: number = +params.get('id');

      console.log(id);
      

      if(id){
        this.propiedadService.findById(id).subscribe( data =>{
          this.propiedad=data;
        });
      }
    })
  }

  
    
}
