import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.page.html',
  styleUrls: ['todo.page.scss'],
})
export class todoPage implements OnInit{
  todos: Todo[];
  todo: Todo;
  todoCategory = null;

  constructor(private todoService: TodoService, 
    private route: ActivatedRoute, 
    private loadingController: LoadingController,
    private nav: NavController) { }

    
  ngOnInit(){
    //this.todoCategory = this.route.snapshot.params['category'];
    //console.log(this.todoCategory);
    //this.todoService.getTodosByCategory(this.todoCategory).subscribe(res => {
    //  this.todos = res;
    //})
    this.todoService.getTodos().subscribe(res => {
     this.todos = res;
    })
  }

  remove(item){
    this.todoService.removeTodo(item.id);
  }
}
