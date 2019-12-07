import { planetsAdapter } from './planets.reducer';

const { selectEntities: selectPlanetEntities, selectIds: selectPlanetIds } = planetsAdapter.getSelectors();
export const planetsAdapterSelectors = { selectPlanetEntities, selectPlanetIds };
