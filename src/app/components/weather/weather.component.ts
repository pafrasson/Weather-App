import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;
  currentLocation: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.currentLocation) {
      this.getCurrentLocationWeather();
    }
  }

  searchWeather() {
    if (this.city) {
      this.weatherService.getWeatherByCity(this.city).subscribe(data => {
        this.weatherData = data;
      });
    }
  }

  getCurrentLocationWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(data => {
          this.weatherData = data;
        });
      });
    }
  }
}

