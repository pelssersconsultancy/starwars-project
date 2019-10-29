import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild([
      {
        path: 'planets',
        loadChildren: () => import('@starwars-project/starwars/planets/feature-planets').then(m => m.StarwarsPlanetsFeaturePlanetsModule),
      },
     ])
  ]
})
export class StarwarsAppShellModule {}
