import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(productos: Producto[], ordenar: string = ''): Producto[] {

    switch (ordenar) {
      case 'nombre':
        return productos = productos.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'precio':
        return productos = productos.sort((a, b) => (a.precio > b.precio) ? -1 : 1);
      case 'categoria':
        return productos = productos.sort((a, b) => (a.categoria > b.categoria) ? 1 : -1);
      default:
        return productos;
    }

  }

}
