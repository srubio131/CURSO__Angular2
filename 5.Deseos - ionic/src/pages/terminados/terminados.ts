import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";

import { DetalleComponent } from "../detalle/detalle";
import { Lista } from "../../app/classes/listas";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosComponent implements OnInit{

  constructor( private _navCtrl: NavController,
               private _listaDeseos: ListaDeseosService ) {
  }

  ngOnInit() {}

  verDetalle( lista: Lista, index:number ) {
    this._navCtrl.push(DetalleComponent, { lista, index });
  }

}
