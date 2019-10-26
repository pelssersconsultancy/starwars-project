import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
