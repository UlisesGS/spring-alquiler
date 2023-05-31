import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Auth/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public loginService:LoginService){}
  ngOnInit(): void {
  console.log("hola");

  }

  public logaut(){
    this.loginService.logaut();
  }
}
