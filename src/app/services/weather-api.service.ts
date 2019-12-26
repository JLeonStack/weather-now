import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherAPIService {
  apiKey: string = "4ea52275b5894d1fb9edc338566476fe";
  URI: string = "";

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&`;
  }

  getWeather(cityName: string, countryCode: string, lat: number, long: number) {
    if (lat && long) {
      this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&`;
      return this.http.get(`${this.URI}lat=${lat}&lon=${long}`);
    } else {
      return this.http.get(`${this.URI}q=${cityName},${countryCode}`);
    }
  }
}
