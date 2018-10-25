import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FooComponent } from './foo/foo.component'
import { BarComponent } from './bar/bar.component'
import { LandingComponent } from './landing/landing.component'

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent,
  },
  {
    path: 'bar',
    component: BarComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
