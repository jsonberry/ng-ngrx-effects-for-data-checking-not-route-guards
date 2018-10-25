import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BarComponent } from './bar/bar.component'
import { BarsEffects } from './bars-state/bars.effects'
import { BarsReducer } from './bars-state/bars.reducer'
import { FooComponent } from './foo/foo.component'
import { FoosEffects } from './foos-state/foos.effects'
import { FoosReducer } from './foos-state/foos.reducer'
import { LandingComponent } from './landing/landing.component'

@NgModule({
  declarations: [AppComponent, FooComponent, BarComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ foos: FoosReducer, bars: BarsReducer }),
    EffectsModule.forRoot([FoosEffects, BarsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
