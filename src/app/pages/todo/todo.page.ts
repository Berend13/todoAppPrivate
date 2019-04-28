import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.page.html',
  styleUrls: ['todo.page.scss'],
})
export class todoPage implements OnInit{
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

@Pipe({
  name: 'SortBy'
})
export class IeSortPipe implements PipeTransform {

  transform(values: Array<string>, args?: string): any {

  if(args==='ASC')
    values = values.sort();
    else
    values = values.sort().reverse();

    return values;
  }
}
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, IeSortPipe ],
  bootstrap: [ App ]
})