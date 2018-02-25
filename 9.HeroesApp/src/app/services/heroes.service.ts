import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroesService {

  heroesURL: string;
  heroeURL: string;

  constructor( private _http: Http ) {
    this.heroesURL = 'https://heroesapp-aca50.firebaseio.com/heroes.json';
    this.heroeURL  = 'https://heroesapp-aca50.firebaseio.com/heroes/';
  }

  nuevoHeroe( heroe: Heroe ) {

    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const body: string = JSON.stringify( heroe );

    return this._http.post( this.heroesURL, body, { headers } )
              .map( res => {
                return res.json();
              });

  }

  actualizarHeroe( heroe: Heroe, key$: string ) {

    const headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });
    const body: string = JSON.stringify( heroe );

    const url: string = `${ this.heroeURL }/${ key$ }.json`;

    return this._http.put( url, body, { headers } )
      .map( res => {
        return res.json();
      });

  }

  eliminarHeroe( key$: string ) {

    const url: string = `${ this.heroeURL }/${ key$ }.json`;

    return this._http.delete( url )
      .map( res => {
        return res.json();
      });

  }

  getHeroe( key$: string ) {

    const url: string = `${ this.heroeURL }/${ key$ }.json`;

    return this._http.get( url )
      .map( res => {
        return res.json();
      });

  }

  getHeroes( ) {

    return this._http.get( this.heroesURL )
      .map( res => {
        return res.json();
      });

  }

}
