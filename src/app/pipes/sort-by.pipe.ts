import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'SortBy'
})
@Injectable()
export class SortBy {

  transform(values: Array<number>, args? ) {

  if(args===123)
    return [].slice.call(values).sort(function(a,b){ 
    return b - a;
    return args; 
  });
  }
}
// @NgModule({
//   imports: [ BrowserModule ],
//   declarations: [ App, IeSortPipe ],
//   bootstrap: [ App ]
// })
