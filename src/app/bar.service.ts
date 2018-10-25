import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { delay, tap } from 'rxjs/operators'
import { Bar } from './bars-state/bars.reducer'

@Injectable({
  providedIn: 'root',
})
export class BarService {
  getBars(): Observable<Bar[]> {
    return of(
      Array.from(Array(20), (e, id) => ({ id: `${id}-bar`, data: 'bar' })),
    ).pipe(
      tap(() => console.log('getBars()')),
      delay(3000),
    )
  }
}
