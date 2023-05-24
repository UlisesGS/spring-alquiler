import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';

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
    this.service.findAll().subscribe(data=>{
      this.usuarios=data;
    })
  }

}
