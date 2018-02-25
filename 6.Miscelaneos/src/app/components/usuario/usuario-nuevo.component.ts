import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private _router:ActivatedRoute ) {

    this._router.parent.params.subscribe( params => {
      console.log("Ruta hija");
      console.log(params);
    });

  }

  ngOnInit() {
  }

}
