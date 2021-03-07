import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  // i18nSelect
  nombre = 'Daniel';
  genero = 'masculino';

  generoMapping = {
    masculino: 'invitarle',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['Daniel', 'Emma', 'Oscar', 'Hugo', 'Roberto', 'Carmen'];

  clientesMapping = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando'
  };

  // KeyValuePipe
  persona = {
    nombre: 'Daniel',
    edad: 46,
    direccion: 'Madrid, España'
  };

  // JsonPipe
  personas = [
    {
      nombre: 'Daniel',
      telefono: '648 11 99 48',
      email: 'daniel.pompa@gmail.com'
    },
    {
      nombre: 'Emma',
      email: 'emma.ciambrino@gmail.com'
    },
    {
      nombre: 'Oscar',
      email: 'oscar.pompa@gmail.com'
    },
    {
      nombre: 'Roberto',
      email: 'roberto.pompa@gmail.com'
    },
  ];

  // AsyncPipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6....

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resultado data de la promesa');
    }, 3500);
  });

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = 'Emma';
    this.genero = 'femenino';
  }

  eliminarCliente() {
    this.clientes.pop();
  }

}
