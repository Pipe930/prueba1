import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Seccion } from '../../modelo/seccion';

import { Alumno } from '../../modelo/alumno';

import { Historial } from '../../modelo/historial';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output() public registrarAlumno = new EventEmitter<Alumno>();

  @Output() public registrarHistorial = new EventEmitter<Historial>();

  public fecha1: Date = new Date();

  public fechaStr: string = this.fecha1.toDateString();

  @Input() public seccion!: Seccion;
  @Input() public listaSecciones!: Array<Seccion>;

  public nuevoALumno: Alumno = {
    nombre: '',
    apellido: '',
    edad: 0,
    rut: '',
    seccion: ''
  }

  public nuevoHistoral: Historial = {
    fecha: this.fecha1,
    tipoAlumno: this.nuevoALumno.nombre
  }

  public agregarNombre(evento: Event):void{
    const inputNombre = evento.target as HTMLInputElement;
    this.nuevoALumno.nombre = inputNombre.value;
  }

  public agregarApellido(evento: Event):void{
    const inputApellido = evento.target as HTMLInputElement;
    this.nuevoALumno.apellido = inputApellido.value;
  }

  public agregarEdad(evento: Event):void{
    const inputEdad = evento.target as HTMLInputElement;
    this.nuevoALumno.edad = Number.parseInt(inputEdad.value);
  }

  public agregarRUT(evento: Event):void{
    const inputRUT = evento.target as HTMLInputElement;
    this.nuevoALumno.rut = inputRUT.value;
  }

  public agregarSeccion(evento: Event):void{
    const inputSeccion = evento.target as HTMLSelectElement;
    this.nuevoALumno.seccion = inputSeccion.value;
  }

  public agregarAlumno():void{
    const copiaALumno: Alumno = {
      ...this.nuevoALumno
    }

    const copiaHistorial: Historial = {
      ...this.nuevoHistoral
    }

    this.registrarHistorial.emit(copiaHistorial);

    this.registrarAlumno.emit(copiaALumno);

    this.nuevoALumno.nombre = '';
    this.nuevoALumno.apellido = '';
    this.nuevoALumno.edad = 0;
    this.nuevoALumno.rut = '';
  }
}
