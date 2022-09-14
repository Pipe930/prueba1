import { Component, Input } from '@angular/core';

import { Alumno } from '../../modelo/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  @Input() public alumno!: Alumno;
  @Input() public listaAlumnos!: Array<Alumno>;
}
