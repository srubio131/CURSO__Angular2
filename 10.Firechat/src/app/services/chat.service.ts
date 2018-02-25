import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable} from 'angularfire2';
import { Mensaje } from '../interfaces/mensaje.interface';


@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  usuario:any = {
    nombre: 'Juan Carlos'
  };

  constructor( private af: AngularFire ) {

    if (localStorage.getItem('usuario')) {
      // Usuario logueado
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.usuario = null;
    }

  }

  cargarMensajes() {
    // Los últimos 20 mensajes
    this.chats = this.af.database.list( 'chats', {
     query: {
       limitToLast: 20,
       orderByKey: true
     }
    });

    return this.chats;

  }

  agregarMensaje( texto: string ) {

    let mensaje: Mensaje = {
      nombre: this.usuario.auth.displayName,
      mensaje: texto,
      uid: this.usuario.uid
    };

    // Devuelve una promesa
    return this.chats.push( mensaje );

  }

  login( proveedor:string ) {

    let provider:any;
    switch (proveedor) {
      case 'google':  provider = AuthProviders.Google; break;
      case 'twitter': provider = AuthProviders.Twitter; break;
    }

    // Devuelve una promesa
    this.af.auth.login({
      provider: provider,
      method:   AuthMethods.Popup
    }).then( data => {
      console.log(data);
      this.usuario = data;
      localStorage.setItem('usuario', JSON.stringify(data));
    });

  }

  logout( proveedor:string ) {

    // Destruir localstorage
    localStorage.removeItem('usuario');
    this.usuario = null;

    //Desloguear
    this.af.auth.logout();
  }

}
