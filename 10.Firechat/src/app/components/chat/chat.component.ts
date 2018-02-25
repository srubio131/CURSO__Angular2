import { Component } from '@angular/core';
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje: string;

  constructor( private _cs: ChatService ) {
    this._cs.cargarMensajes()
        .subscribe( ( mensajes ) => {
           console.log(mensajes);
        });
  }

  enviar() {

    if( this.mensaje.length === 0 ) {
      return;
    }
    // Agregamos mensaje y con la promesa que nos devuelve
    // comprobamos si lo hizo bien o no
    this._cs.agregarMensaje( this.mensaje )
      .then( () => console.log('hecho!') )
      .catch( (error) => console.log('error:'+error) );

    // Limpiar cuadro de texto del mensaje
    this.mensaje = '';

  }


}
