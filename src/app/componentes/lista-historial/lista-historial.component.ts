import { Component, Input } from '@angular/core';

import { Historial } from '../../modelo/historial';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input() public historial!: Historial;
  @Input() public listaHistirial!: Array<Historial>;
}
