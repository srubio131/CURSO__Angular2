import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // Declaración del parámetro de entrada a la directiva
  @Input('appResaltado') nuevoColor:string;

  constructor( private _el: ElementRef ) {
    this.resaltar();
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar( this.nuevoColor );
  }
  @HostListener('mouseleave') mouseSalir() {
    this.resaltar();
  }

  private resaltar( color:string = 'yellow' ) {
    this._el.nativeElement.style.backgroundColor = color;
  }

}
