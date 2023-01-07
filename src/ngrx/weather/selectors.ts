import { createSelector } from "@ngrx/store";
import { Weather } from "src/models/weather";
import { specificCityWeatherFeature } from "./reducers";

const weather = (state: { weather: Weather }) => state.weather;

export const getRandomCityWeather = createSelector(
    weather,
    (weather: Weather) => {
        return weather;
    }
);

type CityWeatherState = {
    specificWeather: Weather;
    city: { name: string };
};

const city = (state: CityWeatherState) => state.city;

export const getCityspecificWeather = createSelector(
    specificCityWeatherFeature.selectSpecificCityWeatherState,
    city,
    (weather: Weather, city: { name: string }) => {
        return (
            weather.records.location.find(
                (w) => w.locationName === city.name
            ) || null
        );
    }
);
