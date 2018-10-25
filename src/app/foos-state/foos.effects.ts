import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'
import { EMPTY, iif, of } from 'rxjs'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { FooService } from '../foo.service'
import {
  FoosActionTypes,
  LoadFoosFailure,
  LoadFoosSuccess,
} from './foos.actions'
import { FoosQuery } from './foos.selectors'

@Injectable()
export class FoosEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(
    ofType(FoosActionTypes.LoadFoos),
    withLatestFrom(this.store.pipe(select(FoosQuery.getLoaded))),
    switchMap(([, loaded]) => {
      return iif(
        () => loaded,
        EMPTY,
        this.service.getFoos().pipe(
          map(foos => new LoadFoosSuccess({ foos })),
          catchError(error => of(new LoadFoosFailure({ error }))),
        ),
      )
    }),
  )

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private service: FooService,
  ) {}
}
