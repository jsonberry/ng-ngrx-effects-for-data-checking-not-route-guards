import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { delay, tap } from 'rxjs/operators'
import { Foo } from './foos-state/foos.reducer'

@Injectable({
  providedIn: 'root',
})
export class FooService {
  public getFoos(): Observable<Foo[]> {
    return of(
      Array.from(Array(20), (e, id) => ({ id: `${id}-foo`, data: 'foo' })),
    ).pipe(
      tap(() => console.log('getFoos()')),
      delay(3000),
    )
  }
}
