import { SharedAPI } from '@starwars-project/starwars-api/models/shared';

export function  mapToPagedResult<T>(swapiPagingResult: SharedAPI.SwapiPagingResult<T>): SharedAPI.PagingResult<T> {
  const page = 'page=';
  const { next, previous, count, results } = swapiPagingResult;

  const nextPage = next ? +next.substring(next.indexOf(page) + page.length) : null;
  const previousPage = previous ? +previous.substring(previous.indexOf(page) + page.length) : null;

  return  { nextPage, previousPage, count, results };
}
