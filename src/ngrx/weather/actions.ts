import { props } from "@ngrx/store";
import { Weather } from "src/models/weather";
import { createActionGroup, emptyProps } from "@ngrx/store";

export const WeatherActions = createActionGroup({
    source: "Weather",
    events: {
        "Get Random City": props<{ location: string }>(),
        "Get Ramdon City Api Success": props<Weather>(),
        "Get Specific City": emptyProps(),
        "Get Specific City Api Success": props<Weather>(),
    },
});
