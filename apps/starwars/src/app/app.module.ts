import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StarwarsAppShellModule } from '@starwars-project/starwars/app-shell';
import { StarwarsLayoutModule } from '@starwars-project/starwars/layout';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

const runtimeChecks = {
  strictStateImmutability: true,
  strictActionImmutability: true,
  // strictStateSerializability: true,
  // strictActionSerializability: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    StarwarsAppShellModule,
    StarwarsLayoutModule,
    StoreModule.forRoot({}, { metaReducers: [], runtimeChecks }),
    EffectsModule.forRoot([]),
    environment.enableStoreDevTools ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: 'apiEndpoint', useValue: environment.apiEndpoint }],
  bootstrap: [AppComponent]
})
export class AppModule {}


