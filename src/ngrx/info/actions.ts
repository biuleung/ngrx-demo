import { createAction, props } from "@ngrx/store";
import { Info } from "src/models/info";

export const renewtAction = createAction(
    "[Info Component] renew",
    props<Info>()
);
