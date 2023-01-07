import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
    selector: "app-b",
    templateUrl: "./b.component.html",
    styleUrls: ["./b.component.scss"],
})
export class BComponent {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = this.store.select("count");
    }
}
