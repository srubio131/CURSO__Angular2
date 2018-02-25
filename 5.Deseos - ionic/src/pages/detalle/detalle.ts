import { Component, OnDestroy } from '@angular/core';
import { AlertController, NavController, NavParams} from "ionic-angular";
import { Lista } from "../../app/classes/listas";
import { ListaItem } from "../../app/classes/lista-item";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.html'
})
export class DetalleComponent implements OnDestroy {

  index: number;
  lista: Lista;

  constructor( public navCtrl: NavController,
               public alertCtrl: AlertController,
               public navParams: NavParams,
               private _listaDeseos: ListaDeseosService) {

    this.index = this.navParams.get( 'index' );
    this.lista = this.navParams.get( 'lista' );

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  actualizar( item: ListaItem ) {

    // Cambiar el valor
    item.estaCompletado = !item.estaCompletado;

    // Verificar si la lista está totalmente terminada
    this.lista.terminado = this.lista.items.every(
      (item) => item.estaCompletado
    );

    // Actualizar el localstorage
    this._listaDeseos.actualizarData();

  }

  borrar() {

    let confirm = this.alertCtrl.create({
      title: 'Borrar lista',
      message: '¿Seguro que quieres borrar la lista?',
      buttons: [
        'Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            // Actualizar el localstorage
            this._listaDeseos.eliminarLista( this.index );
            // Volver atras
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }
}
