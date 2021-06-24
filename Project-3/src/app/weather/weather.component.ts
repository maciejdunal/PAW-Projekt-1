import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherClientService, WeatherResponse} from '../service/weather-client.service';
import {WeatherForCity} from "./weather-for-city";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnDestroy, OnInit {

  cityName: string;
  weathers: WeatherForCity[];

  constructor(private weatherClientService: WeatherClientService) {
    this.cityName = '';
    const item = localStorage.getItem('weathers');
    //
    this.weathers = item === null ? [] : JSON.parse(item);
  }

  checkWeather(): void {
    this.weatherClientService.getWeatherForCity(this.cityName)
      .subscribe((response) => {
        this.weathers.push(new WeatherForCity( this.cityName,response));
      });
  }
 //[aktywuje sie gdy przechodzi sie miedzy Route'mi] Zapisuje do localstorage
  ngOnDestroy(): void {
    localStorage.setItem('weathers', JSON.stringify(this.weathers));
  }

  ngOnInit(): void {
    // zanim dojdzie do przeladowania strony, wykona ngondestroy
    window.onbeforeunload = () => this.ngOnDestroy();
  }
}
