import { Component, OnInit } from "@angular/core";

import { WeatherAPIService } from "./services/weather-api.service";
import { HtmlTagDefinition } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  weather;

  animacion;
  tipoNubes;

  constructor(private WeatherAPIService: WeatherAPIService) {}
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(res => {
      this.getWeather(null, null, res.coords.latitude, res.coords.longitude);
    });
  }

  getWeather(cityName: string, countryCode: string, lat: number, long: number) {
    this.WeatherAPIService.getWeather(
      cityName,
      countryCode,
      lat,
      long
    ).subscribe(
      res => {
        this.weather = res;
        this.animacion = this.weather.weather[0].main;
        this.tipoNubes = this.weather.weather[0].description;
        console.log(res);
      },
      err => console.log(err)
    );
  }
  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    this.getWeather(cityName.value, countryCode.value, null, null);
    cityName.value = "";
    countryCode.value = "";
    return false;
  }
}
