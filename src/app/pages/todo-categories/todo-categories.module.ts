import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoCategoriesPage } from './todo-categories.page';

import { FilterPipe } from '../../pipes/unique.pipe';

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
  declarations: [TodoCategoriesPage, FilterPipe]
})
export class TodoCategoriesPageModule {}
