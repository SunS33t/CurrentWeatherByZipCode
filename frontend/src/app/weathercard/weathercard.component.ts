import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.scss']
})
export class WeathercardComponent implements OnChanges {
  @Input() weatherData: WeatherCast | undefined;
  temp = 0;
  feelsLike = 0;
  condition = "";
  city  =  "";
  icon = "";
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      this.temp = Math.round(this.weatherData?.temp ?? 0);
      this.feelsLike = this.weatherData?.feelsLike ?? 0;
      this.condition = this.weatherData?.condition ?? "";
      this.city = this.weatherData?.city?? "";
      this.icon = this.weatherData?.icon?? "";
  }
}

interface WeatherCast{
  temp: number,
  feelsLike: number,
  condition: string,
  city: string,
  icon: string
}
