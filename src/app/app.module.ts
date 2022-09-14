import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
