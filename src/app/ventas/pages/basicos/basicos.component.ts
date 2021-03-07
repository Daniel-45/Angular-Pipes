import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLowerCase = 'daniel';
  nombreUpperCase = 'DANIEL';
  nombreCompleto = 'daniel pompa pareja';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
