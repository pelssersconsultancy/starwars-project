import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';

import { StarwarsAppShellModule } from '@starwars-project/starwars/app-shell';
import { StarwarsLayoutModule } from '@starwars-project/starwars/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClarityModule,
    StarwarsAppShellModule,
    StarwarsLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


