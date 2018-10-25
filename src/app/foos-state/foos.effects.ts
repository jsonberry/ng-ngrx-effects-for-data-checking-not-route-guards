import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'
import { of, iif, EMPTY } from 'rxjs'
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators'
import { FooService } from '../foo.service'
import {
  FoosActionTypes,
  LoadFoosFailure,
  LoadFoosSuccess,
} from './foos.actions'
import { FoosQuery } from './foos.selectors'
// import { FoosQuery } from './foos.selectors';

@Injectable()
export class FoosEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(
    ofType(FoosActionTypes.LoadFoos),
    withLatestFrom(this.store.pipe(select(FoosQuery.getLoaded))),
    switchMap(([, loaded]) => {
      return iif(
        () => loaded, // Is everything already loaded?
        EMPTY, // OK, just complete the stream immediately using the EMPTY helper
        this.service.getFoos().pipe( // Not loaded yet? OK! Go get the data!
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
