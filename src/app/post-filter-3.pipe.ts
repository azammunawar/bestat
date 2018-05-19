import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postFilter3'
})
export class PostFilter3Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter((element, index) => {
        return (index + 5) % 3 == 0
      });
    }
  }

}
