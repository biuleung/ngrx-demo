import { createFeature, createReducer, on } from "@ngrx/store";
import { Weather } from "src/models/weather";
import { WeatherActions } from "./actions";

const initState: Weather = {
    records: {
        datasetDescription: "",
        location: [
            {
                locationName: "",
                weatherElement: [
                    { time: [{ parameter: { parameterName: "" } }] },
                ],
            },
        ],
    },
};

export const weatherReducer = createReducer(
    initState,
    on(
        WeatherActions.getRamdonCityApiSuccess,
        (state: Weather, action: Weather) => ({
            ...action,
        })
    )
);

/**
 * traditional way
 */
// export const specificWeatherReducer = createReducer(
//     initState,
//     on(
//         WeatherActions.getSpecificCityApiSuccess,
//         (state: Weather, action: Weather) => {
//             return {
//                 ...action,
//             };
//         }
//     )
// );

/**
 * Feature Creators's way
 */
export const specificCityWeatherFeature = createFeature({
    name: "specificCityWeather",
    reducer: createReducer(
        initState,
        on(WeatherActions.getSpecificCityApiSuccess, (state, action) => ({
            ...action,
        }))
    ),
});
