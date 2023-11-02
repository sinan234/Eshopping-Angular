import { createEffect, ofType ,Actions} from '@ngrx/effects';
import {tap, withLatestFrom} from 'rxjs/operators'
import { decrement, increment } from './counter.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectcount } from './counter.selector';

@Injectable()
export class CounterEffects {
  savecounter = createEffect(() =>
    this.actions$.pipe(ofType(increment, decrement),
    withLatestFrom(this.store.select(selectcount)),
    tap(([action,counter])=>{
        console.log(action)
        localStorage.setItem('count',counter.toString())
    })),{dispatch:false
    }
  );
  constructor(private actions$: Actions, private store:Store<{counter:number}>) {}
}
