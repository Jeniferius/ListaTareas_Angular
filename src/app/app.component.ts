import { Component } from '@angular/core';
import { Tarea } from './modelos/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaTareas';

  tareas: Tarea[];

  constructor() {
    this.tareas = [
      new Tarea('Hacer la compra'),
      new Tarea('Pasear al perro')
    ];
  }
  handleTareaValue($event) {
    this.tareas.push($event);
    console.log($event);
    console.log(this.tareas);
  }
}
