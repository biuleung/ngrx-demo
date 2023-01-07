import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Weather } from "src/models/weather";
import { WeatherActions } from "../../ngrx/weather/actions";
import {
    getCityspecificWeather,
    getRandomCityWeather,
} from "../../ngrx/weather/selectors";

@Component({
    selector: "app-weather",
    templateUrl: "./weather.component.html",
    styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent {
    // weather$: Observable<Weather> = this.store.select((state) => state.weather);
    weather$: Observable<Weather> = this.store.select(getRandomCityWeather);
    location$ = this.store.select(getCityspecificWeather);

    JSON = JSON;

    locations = [
        "Taipei city",
        "Tainan city",
        "Kaosiong city",
        "New taipei city",
        "Nantou city",
    ];

    constructor(
        private store: Store<{
            weather: Weather;
            specificWeather: Weather;
            city: { name: string };
        }>
    ) {}

    ngOnInit() {
        setInterval(() => {
            this.store.dispatch(
                // triggering getWeather's action => WeatherEffects (registered in AppModule) => call API
                WeatherActions.getRandomCity({
                    location:
                        this.locations[
                            Math.floor(Math.random() * this.locations.length)
                        ],
                })
            );
        }, 5000);
    }
}
