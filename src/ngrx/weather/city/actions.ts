import { createAction, props } from "@ngrx/store";

export const setCity = createAction(
    "[City Page] set city",
    props<{ name: string }>()
);
