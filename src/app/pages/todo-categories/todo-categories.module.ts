import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoCategoriesPage } from './todo-categories.page';

const routes: Routes = [
  {
    path: '',
    component: TodoCategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodoCategoriesPage]
})
export class TodoCategoriesPageModule {}
