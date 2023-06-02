import { Component, Input, OnInit } from '@angular/core';
import { Propiedad } from '../../propiedad';
import { PropiedadService } from '../../propiedad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/usuario';
import { Peticion } from 'src/app/Alquiler/peticion';
import { AlquilerService } from 'src/app/Alquiler/alquiler.service';

@Component({
  selector: 'app-propiedad-detalle',
  templateUrl: './propiedad-detalle.component.html',
  styleUrls: ['./propiedad-detalle.component.css']
})
export class PropiedadDetalleComponent implements OnInit{
  propiedad: Propiedad=new Propiedad();
  usuario: Usuario=new Usuario();
  peticion: Peticion=new Peticion();



  constructor(private propiedadService: PropiedadService,
    private activatedRoute: ActivatedRoute,
    private alquilerService: AlquilerService,
    private router: Router
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

  public crearPeticion(){
    let data =localStorage.getItem("usuario");
    this.usuario=JSON.parse(data);
    console.log(this.usuario);

    this.peticion.cliente=this.usuario;
    this.peticion.propiedad=this.propiedad;

    this.alquilerService.save(this.peticion).subscribe(data => {
      this.peticion=data;
      console.log(this.peticion);
      this.router.navigate(['/alquiler/form/', this.peticion.id]);
    });
  }
  
    
}
