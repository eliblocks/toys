// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
 transform(value: any, input: string) {
  if (input) {
    input = input.toLowerCase();
    return value.filter(function (el: any) {
     return el.name.toLowerCase().indexOf(input) > -1;
   })
  }
  return value;
 }
}