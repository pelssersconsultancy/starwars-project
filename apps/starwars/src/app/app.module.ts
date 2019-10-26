import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import {
  StarwarsAppShellModule,
  starwarsAppShellRoutes
} from '@starwars-project/starwars/app-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{ path: 'starwars-app-shell', children: starwarsAppShellRoutes }],
      { initialNavigation: 'enabled' }
    ),
    ClarityModule,
    StarwarsAppShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
