import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  task: string;
  createdAt: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection: AngularFirestoreCollection<Todo>;

  private todos: Observable<Todo[]>;
  private todosByCategory: Observable<Todo[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('todos');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a =>  {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
    
    //this.todosByCategory = this.todosCollection.snapshotChanges().pipe(
    //  map(actions => {
    //    return actions.map(a => {
    //      const data = a.payload.doc.data();
    //      const category = a.payload.doc.id;
    //     return {category, ...data};
    //    })
    //  })
    //)

   }


   getTodos(){
     return this.todos;
   }

   getTodo(id){
     return this.todosCollection.doc<Todo>(id).valueChanges();
   }

   //getTodosByCategory(category){
   // return this.todosByCategory;
   //}

   updateTodo(todo: Todo, id: string){
     return this.todosCollection.doc(id).update(todo);
   }

   addTodo(todo: Todo){
     return this.todosCollection.add(todo);
   }

   removeTodo(id){
     return this.todosCollection.doc(id).delete();
   }
}
