import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { PlanetOverviewFacade } from '@starwars-project/starwars/planets/data-access-containers';

@Component({
  selector: 'sw-planet-overview',
  templateUrl: './planet-overview.component.html',
  styleUrls: ['./planet-overview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetOverviewComponent implements OnInit {

  constructor(public planetOverviewFacade: PlanetOverviewFacade) { }

  ngOnInit() {
    this.planetOverviewFacade.requestPlanets();
  }

}
