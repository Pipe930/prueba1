import { Alumno } from '../modelo/alumno';

type tipoAlumno = Alumno

export interface Historial {
  fecha: Date;
  tipoAlumno: tipoAlumno;
}
