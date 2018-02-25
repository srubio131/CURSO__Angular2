import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarComponent implements OnInit{

  nombreLista: string = "";
  nombreItem: string  = "";
  items: ListaItem[]  = [];

  constructor( public alertCtrl: AlertController,
               public navCtrl: NavController,
               public listaDeseos: ListaDeseosService) {
  }

  ngOnInit() {
  }

  agregarItem() {

    // Solo cuando hay texto metido
    if (this.nombreItem.length == 0) {
      return;
    }

    // Añadir item a la lista
    let item = new ListaItem(this.items.length+1, this.nombreItem);
    this.items.push( item );

    // Limpiar textbox para el siguiente
    this.nombreItem = "";

  }

  eliminarItem( index:number ) {

    this.items.splice(index,1);

  }

  guardarLista() {

    // Solo cuando hay texto metido en el nombre de la lita
    // *Es obligatorio
    if (this.nombreLista.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    // Se ha indicado texto en el textbox del nombre de lista
    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

    // Añadir la nueva lista al servicio
    this.listaDeseos.agregarLista( lista );

    // Cerrar la page
    this.navCtrl.pop();

  }

}
