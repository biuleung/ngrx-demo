import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import {
    decrementAction,
    incrementAction,
} from "../ngrx/counter/actions";
import { renewtAction } from "../ngrx/info/actions";
import { WeatherActions } from "../ngrx/weather/actions";
import { setCity } from "../ngrx/weather/city/actions";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "demo-state";

    isLogin = false;

    constructor(private store: Store<{ count: number; info: any }>) {}

    ngOnInit() {}

    onIncrementCount() {
        this.store.dispatch(incrementAction());
    }

    ondecrementCount() {
        this.store.dispatch(decrementAction());
    }

    Login() {
        this.isLogin = true;
        this.store.dispatch(
            renewtAction({
                name: "admin",
                time:
                    new Date().getHours().toString() +
                    ":" +
                    new Date().getMinutes().toString() +
                    ":" +
                    new Date().getSeconds().toString(),
            })
        );
    }

    Logout() {
        this.isLogin = false;
        this.store.dispatch(
            renewtAction({
                name: "",
                time: "",
            })
        );
    }

    onSelectCityChange(city: string) {
        this.store.dispatch(setCity({ name: city }));
    }

    handleGetSpecificWeather() {
        this.store.dispatch(WeatherActions.getSpecificCity());
    }
}
