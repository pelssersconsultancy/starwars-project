import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SubnavComponent } from './subnav/subnav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, ClarityModule, RouterModule],
  declarations: [HeaderComponent, LayoutComponent, SubnavComponent, MainComponent],
  exports: [HeaderComponent, LayoutComponent, SubnavComponent, MainComponent]
})
export class StarwarsLayoutModule {}
