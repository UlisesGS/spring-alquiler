import { Component } from '@angular/core';
import { LoginService } from 'src/app/Auth/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public loginService:LoginService){}

  public logaut(){
    this.loginService.logaut();
  }
}
