import { Component } from '@angular/core';

import { Alumno } from './modelo/alumno';

import { Seccion } from './modelo/seccion';

import { Historial } from './modelo/historial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registroasistenciaInacap';

  public fecha1: Date = new Date();

  public fechaStr: string = this.fecha1.toDateString();

  public historiales: Array<Historial> = [
    {
      fecha: this.fecha1,
      tipoAlumno: 'Nicolas'
    }
  ]

  public secciones: Array<Seccion> = [
    {
      id: 1,
      nombre: 'SGY2732-18D'
    }
  ];

  public alumnos: Array<Alumno> = [
    {
      nombre: 'Andres',
      apellido: 'Muñoz',
      edad: 19,
      rut: '20374782-2',
      seccion: 'SGY2718-18D'
    }
  ];

  public guardarAlumno(alumno: Alumno):void{
    const idAlumno = this.alumnos.length + 1;
    alumno.id = idAlumno;
    this.alumnos.push(alumno);
    alert("Se agrego el alumno correctamente : D");
  }

  public guardarSeccion(seccion: Seccion):void{
    const idSeccion = this.secciones.length + 1
    seccion.id = idSeccion;
    this.secciones.push(seccion);
    alert("Se agrego la seccion con exito : D")
  }
}
