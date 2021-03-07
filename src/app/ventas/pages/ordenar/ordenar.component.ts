import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  nombre = 'daniel';

  enMayusculas = false;

  orden = '';

  productos: Producto[] = [
    {
      nombre: 'Galletas de chocolate con avellanas',
      precio: 8,
      categoria: 'Dulces',
      stock: 50
    },
    {
      nombre: 'Tableta de chocolate Negro bio 70% de cacao',
      precio: 10,
      categoria: 'Dulces',
      stock: 100
    },
    {
      nombre: 'Jamón de Bellota 100% Ibérico',
      precio: 490,
      categoria: 'Jamones',
      stock: 90
    },
    {
      nombre: 'Estuche Jamón Gran Reserva',
      precio: 590,
      categoria: 'Jamones',
      stock: 50
    },
    {
      nombre: 'Lomo de bellota 100% Ibérico',
      precio: 60,
      categoria: 'Embutidos',
      stock: 70
    },
    {
      nombre: 'Chorizo cular 100% Ibérico',
      precio: 20,
      categoria: 'Embutidos',
      stock: 60
    },
    {
      nombre: 'Salchichón cular 100% Ibérico',
      precio: 18,
      categoria: 'Embutidos',
      stock: 30
    },
    {
      nombre: 'Paté Ibérico de Bellota',
      precio: 15,
      categoria: 'Patés',
      stock: 70
    },
    {
      nombre: 'Paté de hongos con trufa blanca',
      precio: 12,
      categoria: 'Patés',
      stock: 60
    },
    {
      nombre: 'Queso parmesano',
      precio: 10,
      categoria: 'Quesos',
      stock: 60
    },
    {
      nombre: 'Queso mascarpone',
      precio: 15,
      categoria: 'Quesos',
      stock: 60
    },
    {
      nombre: 'Ternera para tacos Gourmet',
      precio: 15,
      categoria: 'Carnes',
      stock: 100
    },
    {
      nombre: 'Tallarines de trigo orgánicos',
      precio: 8,
      categoria: 'Pastas',
      stock: 100
    },
    {
      nombre: 'Tallarines de arroz integral orgánico 100%',
      precio: 6,
      categoria: 'Pastas',
      stock: 80
    },
    {
      nombre: 'Arroz bomba Illa Riu',
      precio: 9,
      categoria: 'Arroces',
      stock: 100
    },
    {
      nombre: 'Arroz basmati Club Gourmet',
      precio: 8,
      categoria: 'Arroces',
      stock: 100
    },
    {
      nombre: 'Risotto con setas Gli Aironi',
      precio: 10,
      categoria: 'Arroces',
      stock: 100
    },
    {
      nombre: 'Café molido Jamaica Blue Mountain',
      precio: 30,
      categoria: 'Cafés',
      stock: 70
    },
    {
      nombre: 'Café molido tueste natural Brasil Sul Minas',
      precio: 10,
      categoria: 'Cafés',
      stock: 70
    },
    {
      nombre: 'Tequila añejo Don Julio',
      precio: 155,
      categoria: 'Tequila',
      stock: 70
    },
    {
      nombre: 'Vodka Belvedere Pure botella 6L',
      precio: 403,
      categoria: 'Vodka',
      stock: 70
    },
    {
      nombre: 'Whisky escocés The Macallan 25 años',
      precio: 1595,
      categoria: 'Whisky',
      stock: 70
    },
    {
      nombre: 'Ron Zacapa Royal',
      precio: 285,
      categoria: 'Ron',
      stock: 70
    },
    {
      nombre: 'Zumo natural de mandarina y romero',
      precio: 5,
      categoria: 'Zumos',
      stock: 70
    },
    {
      nombre: 'Zumo cocktail de frutas rojas ecológicas',
      precio: 7,
      categoria: 'Zumos',
      stock: 70
    },
    {
      nombre: 'Té verde con mezcla de jazmín',
      precio: 10,
      categoria: 'Tés',
      stock: 70
    },
    {
      nombre: 'Té rojo con mezcla de jazmín',
      precio: 9,
      categoria: 'Tés',
      stock: 70
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.orden =  valor;
  }

}
