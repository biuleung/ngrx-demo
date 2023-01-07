
Writing actions
    - `src/app/state-management/info/actions.ts`

Action Groups
https://ngrx.io/guide/store/action-groups
Action groups is a feature to group actions together that belong to the same source.
    - `src/ngrx/weather/actions.ts`
        export const WeatherActions = createActionGroup({
            source: "Weather",
            events: {
                "Get Random City": props<{ location: string }>(),
                "Get Ramdon City Api Success": props<Weather>(),
                "Get Specific City": emptyProps(),
                "Get Specific City Api Success": props<Weather>(),
            },
        });

Creating the reducer function
    - `src/app/state-management/info/reducers.ts`

Registering root state
    - `src/app/app.module.ts`
            imports: [
                DemoStateModule.forRoot({
                count: counterReducer,
                info: infoReducer,
                })
            ]

Writing effects
https://ngrx.io/guide/effects
    - decrease the responsibility of the component (e.g. No need api services injected)
    - register it so the effects start running (root-level effects)
    - `src/app/app.module.ts`
        imports: [
            EffectsModule.forRoot([WeatherEffects]),
        ]

Feature Creators
    - createFeature
    - It reduces repetitive code in selector files by generating a feature selector and child selectors for each feature state property.
    - `src/app/state-management/weather/selectors.ts`
        export const specificCityWeatherFeature = createFeature({
            name: "specificCityWeather",
            reducer: createReducer(
                initState,
                on(WeatherActions.getSpecificCityApiSuccess, (state, action) => ({
                    ...action,
                }))
            ),
        });
    - `src/app/app.module.ts`
        imports: [
            StoreModule.forFeature(specificCityWeatherFeature),
        ]

Using selectors for multiple pieces of state
    - `src/app/state-management/weather/selectors.ts`
        export const getCityspecificWeather = createSelector(
            specificWeather,
            city,
            (weather: Weather, city: { name: string }) => {
                return (
                    weather.records.location.find(
                    (w) => w.locationName === city.name
                    ) || null
                );
                 }
        );

@ngrx/store-devtools
