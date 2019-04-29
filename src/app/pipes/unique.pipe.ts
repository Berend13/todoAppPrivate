import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'unique',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : string): any[] {

        if (!items) return [];
        var output = []
        var unique = [];
        var l = items.length;
        var i;
        for( i=0; i<l; i++) {
            if(!unique.includes(items[i].category)){
              output.push(items[i]);
              unique.push(items[i].category);
            };
        }
        return output;
    }
}