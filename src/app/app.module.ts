import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BComponent } from "./b/b.component";
import { AComponent } from "./a/a.component";
import { counterReducer } from "../ngrx/counter/reducers";
import { CComponent } from "./c/c.component";
import { infoReducer } from "../ngrx/info/reducers";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "src/data-services/data.service";
import { WeatherComponent } from "./weather/weather.component";
import { EffectsModule } from "@ngrx/effects";
import { WeatherEffects } from "../ngrx/weather/effects";
import {
    specificCityWeatherFeature,
    // specificWeatherReducer,
    weatherReducer,
} from "../ngrx/weather/reducers";
import { cityReducer } from "../ngrx/weather/city/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";

@NgModule({
    declarations: [
        AppComponent,
        BComponent,
        AComponent,
        CComponent,
        WeatherComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        StoreModule.forRoot({
            count: counterReducer,
            info: infoReducer,
            weather: weatherReducer,
            // specificWeather: specificWeatherReducer,
            city: cityReducer,
        }),
        StoreModule.forFeature(specificCityWeatherFeature),
        StoreDevtoolsModule.instrument({
            name: "NgRx Demo App",
        }),
        EffectsModule.forRoot([WeatherEffects]),
    ],
    providers: [DataService],
    bootstrap: [AppComponent],
})
export class AppModule {}
