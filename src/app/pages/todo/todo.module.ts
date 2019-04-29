import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SortBy } from '../../pipes/sort-by.pipe'

import { todoPage } from './todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: todoPage
      }
    ])
  ],
  declarations: [todoPage, SortBy]
})
export class TodoPageModule {}
