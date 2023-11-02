import { Action, createAction, props } from "@ngrx/store";

export const increment= createAction('[Counter] Increment',
props<{
    valueg:number
}>())

// export class IncrementAction implements Action{
//     readonly type="[Counter] Increment"
//     constructor(public valueg:number){}
// }

export const decrement=createAction('[Counter] Decrement',
props<{
    valuen:number
}>()
)

// export type CounterActions=IncrementAction