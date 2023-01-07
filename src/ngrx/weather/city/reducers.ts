import { createReducer, on } from "@ngrx/store";
import { setCity } from "./actions";

const initState: { name: string } = { name: "Taipei city" };

export const cityReducer = createReducer(
    initState,
    on(setCity, (state: { name: string }, action: { name: string }) => ({
        ...action,
    }))
);
