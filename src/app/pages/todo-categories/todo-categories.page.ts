import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-categories',
  templateUrl: 'todo-categories.page.html',
  styleUrls: ['todo-categories.page.scss'],
})
export class TodoCategoriesPage implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService) { 

  }
  ngOnInit(){
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }

  remove(item){
    this.todoService.removeTodo(item.id);
  }
}