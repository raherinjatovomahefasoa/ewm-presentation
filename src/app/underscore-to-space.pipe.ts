import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreToSpace'
})
export class UnderscoreToSpacePipe implements PipeTransform {

  transform(value: string): string {
    // Use the replace method to replace underscores with spaces
    return value.replace(/_/g, ' ');
  }

}
