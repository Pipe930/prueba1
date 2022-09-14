import { Component } from '@angular/core';

import { Alumno } from './modelo/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registroasistenciaInacap';

  public alumnos: Array<Alumno> = [
    {
      nombre: 'Andres',
      apellido: 'Muñoz',
      edad: 19,
      rut: '20374782-2',
      seccion: ''
    }
  ]
}
