import { Component, Output, EventEmitter } from '@angular/core';

import { Seccion } from '../../modelo/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public registrarSeccion = new EventEmitter<Seccion>;

  public nuevaSeccion: Seccion = {
    id: 1,
    nombre: ''
  };

  public agregarNombreSeccion(evento: Event):void{
    const inputNombreSeccion = evento.target as HTMLInputElement;
    this.nuevaSeccion.nombre = inputNombreSeccion.value;
  }

  public agregarSeccion():void{
    const copiaSeccion: Seccion = {
      ...this.nuevaSeccion
    };

    this.registrarSeccion.emit(copiaSeccion);

    this.nuevaSeccion.nombre = '';
  }
}
