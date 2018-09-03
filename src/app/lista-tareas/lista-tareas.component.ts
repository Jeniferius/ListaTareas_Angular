import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  valorSeleccionado: string;
  arrFiltrado: Tarea[];



  @Input() tareas: Tarea[];
  constructor() { 

  }

  ngOnInit() {
    this.arrFiltrado = this.tareas;
  }

  completarTarea(tarea) {
    tarea.marcarCompleta();
  }

  handleSelect($event) {
    

    this.valorSeleccionado = $event.target.value;
    
    this.arrFiltrado = this.tareas.filter((item) => {
      if (this.valorSeleccionado == 'completa') {
        return item.completa;
      } else if (this.valorSeleccionado == 'incompleta') {
        return !item.completa;
      } else {
        return true;
      }  
    });

    console.log(this.arrFiltrado);
    


  }
}
