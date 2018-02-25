import { Injectable } from '@angular/core';
import { Lista } from "../classes/listas";

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    // Listas de ejemplo
    //let lista1 = new Lista('Compras de supermercado');
    //let lista2 = new Lista('Juegos que deseo');
    //let lista3 = new Lista('Cosas de la universidad');
    //this.listas.push(lista1, lista2, lista3);

    this.cargarData();

  }

  agregarLista( lista: Lista ) {
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista( index: number ) {
    this.listas.splice(index,1);
    this.actualizarData();
  }

  // LocalStorage
  actualizarData() {
      localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData() {
    if( localStorage.getItem( "data" ) ) { // existe el localstorage
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

}
