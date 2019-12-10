import { StarwarsEnvironment } from './starwars-environment.interface';

export const environment: StarwarsEnvironment = {
  production: true,
  enableStoreDevTools: false,
  apiEndpoint: 'http://localhost:3333/api'
};
