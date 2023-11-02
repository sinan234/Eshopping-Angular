import { Action, createReducer, on } from "@ngrx/store";
import {increment, decrement } from "./counter.actions";

const initialstate=0;
export const counterreducer= createReducer(
    initialstate,
    on(increment,(state, action)=>state+action.valueg),
    on(decrement,(state,action)=>state-action.valuen)
)

// export function counterreducer(state=initialstate, action:CounterActions| Action){
//     if (action.type=="[Counter] Increment"){
//         return state+(action as IncrementAction).valueg;
//     }
//     return state
// }

