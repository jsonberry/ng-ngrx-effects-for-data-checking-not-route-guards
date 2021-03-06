import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { BarsActions } from './bars.actions'
import { BarsState } from './bars.reducer'
import { BarsQuery } from './bars.selectors'

@Injectable({
  providedIn: 'root',
})
export class BarsFacade {
  public allBars$ = this.store.pipe(select(BarsQuery.getAllBars))

  constructor(private store: Store<BarsState>) {}

  public loadAll(): void {
    this.store.dispatch(new BarsActions.LoadBars())
  }
}
