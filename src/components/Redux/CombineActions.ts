import { combineReducers } from "redux";
import { counterAction } from "./ActionFunc";


export const rootReducer  = combineReducers({count:counterAction})

export type rootState = ReturnType<typeof rootReducer>;