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
      

  }