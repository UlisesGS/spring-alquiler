import { Injectable, OnInit } from '@angular/core';
import { Usuario } from '../Usuario/usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.isLogin();
  }

  public saveLogin(usuario: Usuario){
    localStorage.setItem("usuario", JSON.stringify(usuario));
    Swal.fire('Correcto', 'Inicio sesion correctamente', 'success');
  }

  public isLogin():boolean{
    if(localStorage.getItem("usuario")){
      return true;
    }
      return false;
    
  }

  public logaut(){
    localStorage.clear();
  }
}
