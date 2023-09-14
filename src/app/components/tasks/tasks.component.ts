import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/interface/task_interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent  implements OnInit {
 
  public todos: Todo[] = [];

  newTodo?: string;
  constructor() { }

  ngOnInit() {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos){
      this.todos = JSON.parse(storedTodos);
    }
  }

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';

      // Guarda la lista actualizada en el localStorage
      this.updateLocalStorage();
    }
  }

  done(id:number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted

    // Actualiza la lista en el localStorage despues de cada cambio.
    this.updateLocalStorage();
  }

  remove(id: number){
    this.todos = this.todos.filter((v,i) => i !== id);

    // Actualiza la lista en el localStorage despues de cada cambio
    localStorage.removeItem(`todo-${id}`);
    this.todos.splice(id, 1);

    this.updateLocalStorage();
  }

  private updateLocalStorage(){
    // Guarda la lista actualizada en el localStorage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
