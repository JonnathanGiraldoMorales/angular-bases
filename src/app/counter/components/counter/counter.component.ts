import { Component } from '@angular/core';

//component etiqueta que se usa para crear una clase como componente
@Component({
  selector: 'app-counter', //Identificador para incializar o instanciar
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 50;

  increaseBy( valorIncremento:number ):void{
    this.counter+=valorIncremento;
  }

  resetCounter():void{
    this.counter = 50;
  }
}
