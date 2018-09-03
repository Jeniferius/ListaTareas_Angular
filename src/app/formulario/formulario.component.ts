import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tareaValue: string;
  @Output() onSendTarea = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarTarea() {
    let t1 = new Tarea(this.tareaValue)
    this.onSendTarea.emit(t1);
  }

}
