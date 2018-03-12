import { Component } from '@angular/core';

import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[] = [
    {id: 1, nombre: 'Alvaro', titulo: 'Hacer ejercicio' , comentario: 'En la tarde a partir de las 6 pm'},
    {id: 2, nombre: 'Jorge', titulo: 'Hacer tareas' , comentario: 'En la tarde a partir de las 6 pm'},
    {id: 3, nombre: 'Daniel', titulo: 'Probar apps' , comentario: 'En la tarde a partir de las 6 pm'}
  ];

  tareaNueva = false;

  nuevaTarea: Tarea = new Tarea;

  formEditar = 0;

  mostrarForm() {
    if (this.tareaNueva === false) {
      this.tareaNueva = true;
    } else {
      this.tareaNueva = false;
    }
  }

  agregarTarea() {
    this.nuevaTarea.id = this.tareas.length + 1;
    console.log(this.nuevaTarea);
    this.tareas.push(this.nuevaTarea);
    this.tareaNueva = false;
    this.nuevaTarea = new Tarea;
  }

  editar(tarea: Tarea) {
    console.log(tarea);
    if (this.formEditar === tarea.id) {
      this.formEditar = 0;
    } else {
      this.formEditar = tarea.id;
    }
  }
}
