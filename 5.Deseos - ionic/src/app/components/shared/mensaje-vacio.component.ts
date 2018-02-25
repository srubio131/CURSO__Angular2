import { Component, OnInit } from '@angular/core';
import { AgregarComponent } from "../../../pages/agregar/agregar";
import { NavController } from "ionic-angular";

@Component({
  selector: 'mensaje-vacio',
  templateUrl: 'mensaje-vacio.component.html'
})
export class MensajeVacioComponent implements OnInit {
  constructor( public _navCtrl: NavController ) {
  }

  ngOnInit() {
  }

  irAgregar() {
    this._navCtrl.push(AgregarComponent);
  }
}
