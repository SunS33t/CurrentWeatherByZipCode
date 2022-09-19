import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheitToCelsius'
})
export class FahrenheitToCelsiusPipe implements PipeTransform {

  transform(value: number): unknown {
    return Math.round((value-32)/1.8);
  }

}
