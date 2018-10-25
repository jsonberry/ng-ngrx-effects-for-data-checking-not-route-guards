import { Component, OnInit } from '@angular/core'
import { FoosFacade } from '../foos-state/foos.facade'

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {
  public foos$ = this.facade.allFoos$
  public loaded$ = this.facade.loaded$

  constructor(private facade: FoosFacade) {}

  ngOnInit() {
    this.facade.loadAll()
  }
}
