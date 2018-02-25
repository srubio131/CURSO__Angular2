import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArtista:string = 'https://api.spotify.com/v1/artists';

  constructor( private http:Http ) { }

  getArtistas( termino:string ):any {
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    //http.get() --> Devuelve un observable
    return this.http.get( url )
                .map( res => {
                  return res.json().artists.items;
                });
  }

  getArtista( id:string ):any {
    let query = `/${ id }`;
    let url = this.urlArtista + query;

    //http.get() --> Devuelve un observable
    return this.http.get( url )
      .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  getTop( id:string ):any {
    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    //http.get() --> Devuelve un observable
    return this.http.get( url )
      .map( res => {
        console.log(res.json().tracks);
        return res.json().tracks;
      });
  }

}
