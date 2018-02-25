import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from "../classes/listas";

@Pipe({
  name: 'mostrarPendientes',
  // Ejecutar filtro cada vez que la data cambia
  pure: false
})

export class PendientesPipe implements PipeTransform {
  transform( listas: Lista[], estado: boolean = false ): Lista[] {
    return listas.filter( (lista) => lista.terminado !== estado );
  }
}
