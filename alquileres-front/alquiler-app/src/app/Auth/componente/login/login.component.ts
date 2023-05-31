import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario/usuario';
import { UsuarioService } from 'src/app/Usuario/usuario.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario= new Usuario();

  ngOnInit(): void {
 console.log('login componente');

  }

  constructor(private usuarioService: UsuarioService,
    private loginService: LoginService,
    private router: Router ){}

  public findByUsernameAndPassword(){
    this.usuarioService.findByUsernameAndPassword(this.usuario.username, this.usuario.password).subscribe(data =>{
      this.loginService.saveLogin(data);
      this.router.navigate(['/propiedad/lista']);

    }
    ,error=>{
      if(error.status==404){
        Swal.fire('Error','Usuario o contraseña incorrectos', 'error');
      }

    }
    );
  }
}
