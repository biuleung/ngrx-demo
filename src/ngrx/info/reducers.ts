import { renewtAction } from "./actions";
import { Info } from "../../models/info";
import { createReducer, on } from "@ngrx/store";

const initState: Info = {
    name: "",
    time: "",
};

export const infoReducer = createReducer(
    initState,
    on(renewtAction, (state: Info, payload: Info) => {
        return {
            ...state,
            ...payload,
        };
    })
);
