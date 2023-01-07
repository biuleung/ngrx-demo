import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
    selector: "app-a",
    templateUrl: "./a.component.html",
    styleUrls: ["./a.component.scss"],
})
export class AComponent {
    count$: Observable<number>;
    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.select("count");
    }
}
