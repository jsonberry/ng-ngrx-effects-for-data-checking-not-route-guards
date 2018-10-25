import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { FoosActions } from './foos.actions'
import { FoosState } from './foos.reducer'
import { FoosQuery } from './foos.selectors'

@Injectable({
  providedIn: 'root',
})
export class FoosFacade {
  public allFoos$ = this.store.pipe(select(FoosQuery.getAllFoos))
  public loaded$ = this.store.pipe(select(FoosQuery.getLoaded))

  constructor(private store: Store<FoosState>) {}

  public loadAll(): void {
    this.store.dispatch(new FoosActions.LoadFoos())
  }
}
