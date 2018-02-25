import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle Works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private _router:ActivatedRoute ) {

    this._router.parent.params.subscribe( params => {
      console.log("Ruta hija");
      console.log(params);
    });

  }

  ngOnInit() {
  }

}
