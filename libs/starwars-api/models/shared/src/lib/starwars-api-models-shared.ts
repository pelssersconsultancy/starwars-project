export interface PagingResult<T> {
  count: number;
  nextPage: number | null;
  previousPage: number |  null;
  results: T[];
}


export interface SwapiPagingResult<T> {
  count: number;
  next: string | null;
  previous: string |  null;
  results: T[];
}
