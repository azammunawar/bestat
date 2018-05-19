import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.filter((element, index) => {
            return (index + 3) % 3 == 0
      });
    }
  }

}
