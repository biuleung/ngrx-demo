import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { DataService } from "src/data-services/data.service";
import { Weather } from "src/models/weather";
import { WeatherActions } from "./actions";

@Injectable()
export class WeatherEffects {
    getWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WeatherActions.getRandomCity),
            mergeMap((action: { location: string }) =>
                this._dataService.getWeather(action.location).pipe(
                    map(
                        (weather: Weather) =>
                            WeatherActions.getRamdonCityApiSuccess(weather),
                        catchError(() =>
                            of({ type: "[Weather API] Weather Got Error" })
                        )
                    )
                )
            )
        )
    );

    getspecificWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(WeatherActions.getSpecificCity),
            mergeMap(() =>
                this._dataService.getWeather().pipe(
                    map((weather: Weather) =>
                        WeatherActions.getSpecificCityApiSuccess(weather)
                    ),
                    catchError(() =>
                        of({ type: "[Weather API] Weather Got Error" })
                    )
                )
            )
        )
    );

    constructor(private actions$: Actions, private _dataService: DataService) {}
}
