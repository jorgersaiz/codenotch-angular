import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entrecomillar',
  standalone: true
})
export class EntrecomillarPipe implements PipeTransform {

  transform(value: string): string {
    return `'${value}'`;
  }

}
