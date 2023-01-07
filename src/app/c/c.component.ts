import { Component } from "@angular/core";
import { Info } from "../../models/info";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
    selector: "app-c",
    templateUrl: "./c.component.html",
    styleUrls: ["./c.component.scss"],
})
export class CComponent {
    info$: Observable<Info>;

    constructor(private store: Store<{ info: Info }>) {
        this.info$ = store.select("info");
    }
}
