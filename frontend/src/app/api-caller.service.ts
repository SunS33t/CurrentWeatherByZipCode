import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {
  readonly APIUrl = 'https://localhost:44395';

  constructor(private http: HttpClient) { }

  getWeather(zip: string){
    return this.http.get<any>(this.APIUrl + `/WeatherForecast/GetWeatherByZipCode/${zip}&us`)
  }
}
