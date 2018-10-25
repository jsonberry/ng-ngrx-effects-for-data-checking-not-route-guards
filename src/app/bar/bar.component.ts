import { Component, OnInit } from '@angular/core'
import { BarsFacade } from '../bars-state/bars.facade'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  public bars$ = this.facade.allBars$

  constructor(private facade: BarsFacade) {}

  ngOnInit() {
    this.facade.loadAll()
  }
}
