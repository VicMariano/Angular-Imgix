import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelType'
})
export class LabelTypePipe implements PipeTransform {
// THIS PIPE TRANSFORMS SOME PARAMETERS' VALUES INTO THE APPROPIATE LABEL

  transform(value: string, ...args: unknown[]): string {
    let label: string = 'Option'

    switch (value) {
      case 'h':
        label = 'Horizontal';
        break;
      case 'v':
        label = 'Vertical';
        break;
      case 'hv':
        label = 'Horizontal-Vertical';
        break;
      default:
        break;
    }

    return label;
  }

}
