export class ListaItem {
  id: number;
  nombre: string;
  estaCompletado: boolean;

  constructor( id: number, nombre: string ) {
    this.id             = id;
    this.nombre         = nombre;
    this.estaCompletado = false;
  }

}
