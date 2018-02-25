import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar";
import { DetalleComponent } from "../detalle/detalle";
import { Lista } from "../../app/classes/index";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesComponent implements OnInit {

  constructor( private _listaDeseos: ListaDeseosService,
               private _navCtrl: NavController ) {
  }

  ngOnInit() {}

  irAgregar() {
    this._navCtrl.push(AgregarComponent);
  }

  verDetalle( lista: Lista, index:number ) {
    this._navCtrl.push(DetalleComponent, { lista, index });
  }

}
