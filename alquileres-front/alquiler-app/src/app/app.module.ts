import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './Usuario/componente/lista/lista.component';
import { NavBarComponent } from './componente/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UsuarioFormComponent } from './Usuario/componente/usuario-form/usuario-form.component';
import { PropiedadListaComponent } from './Propiedad/componente/propiedad-lista/propiedad-lista.component';
<<<<<<< HEAD
import { PropiedadFormComponent } from './Propiedad/componente/propiedad-form/propiedad-form.component';
=======
import { PropiedadDetalleComponent } from './Propiedad/componente/propiedad-detalle/propiedad-detalle.component';
>>>>>>> ulises

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NavBarComponent,
    UsuarioFormComponent,
    PropiedadListaComponent,
<<<<<<< HEAD
    PropiedadFormComponent
=======
    PropiedadDetalleComponent
>>>>>>> ulises

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
