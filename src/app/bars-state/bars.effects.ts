import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { BarService } from '../bar.service'
import {
  BarsActionTypes,
  LoadBarsFailure,
  LoadBarsSuccess,
} from './bars.actions'

@Injectable()
export class BarsEffects {
  @Effect()
  loadBars$ = this.actions$.pipe(
    ofType(BarsActionTypes.LoadBars),
    switchMap(() =>
      this.service.getBars().pipe(
        map(bars => new LoadBarsSuccess({ bars })),
        catchError(error => of(new LoadBarsFailure({ error }))),
      ),
    ),
  )

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private service: BarService,
  ) {}
}
