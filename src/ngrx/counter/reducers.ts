import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction } from "./actions";

const initState = 0;

export const counterReducer = createReducer(
    initState,
    on(incrementAction, (state: number) => {
        return state + 1;
    }),
    on(decrementAction, (state: number) => {
        if (state <= 0) {
            return 0;
        } else {
            return state - 1;
        }
    })
);
