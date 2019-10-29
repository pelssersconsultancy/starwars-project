import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'planets' },
        {
          path: 'planets',
          loadChildren: () =>
            import('@starwars-project/starwars/planets/feature-planets').then(
              m => m.StarwarsPlanetsFeaturePlanetsModule
            )
        }
      ],
      { preloadingStrategy: PreloadAllModules  } // enableTracing: true
    )
  ]
})
export class StarwarsAppShellModule {
  constructor() {
    console.log('StarwarsAppShellModule constructed');
  }
}
