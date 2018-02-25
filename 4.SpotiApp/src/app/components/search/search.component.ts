import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {

  artistas:any [] = [];

  constructor( private _spotifyService:SpotifyService ) { }

  ngOnInit() {  }

  buscarArtista( termino:string ) {
      this._spotifyService.getArtistas(termino)
                         .subscribe( data => {
                           this.artistas = data;
                         });
     console.log(this.artistas);
  }

}
