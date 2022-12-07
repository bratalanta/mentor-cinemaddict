import {
  getCurrentFilteredFilms,
  getCurrentSortedFilms,
} from '../components/Films/helper';

export const useFilter = (filter: string | undefined, param: string) => {
  const filteredFilms = getCurrentFilteredFilms(filter);
  const sortedFilms = getCurrentSortedFilms(filteredFilms, param);
  return sortedFilms;
};
