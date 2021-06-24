import {WeatherResponse} from "../service/weather-client.service";

export class WeatherForCity {
//klasa ktora zapisuje dane lokalikazcje glownie cityName ktore jest zmienne
  constructor(cityName: string, weatherResponse: WeatherResponse) {
    this.cityName = cityName;
    this.weatherResponse = weatherResponse;
  }

  cityName: string;
  weatherResponse: WeatherResponse;

}
