import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas = 2365289.55678;
  ventasBrutas = 3997896.58692;
  porcentaje = 0.49;

  constructor() { }

  ngOnInit(): void {
  }

}
