import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postFilter2'
})
export class PostFilter2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter((element, index) => {
        return (index + 4) % 3 == 0
      });
    }
  }

}
