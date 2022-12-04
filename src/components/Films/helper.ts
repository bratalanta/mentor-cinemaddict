import dayjs from 'dayjs';
import { SortOptions } from '../../const';
import filmsState from '../../store/FilmsState';
import { TAdaptedFilm } from '../../types/adaptedFilm';

const sortByDate = (a: TAdaptedFilm, b: TAdaptedFilm) =>
  dayjs(b.filmInfo.release.date).year() - dayjs(a.filmInfo.release.date).year();

const sortByRating = (a: TAdaptedFilm, b: TAdaptedFilm) =>
  b.filmInfo.totalRating - a.filmInfo.totalRating;

export const getCurrentSortedFilms = (option: string) => {
  switch (option) {
    case SortOptions.DATE:
      return [...filmsState.filmsList].sort(sortByDate);
    case SortOptions.RATING:
      return [...filmsState.filmsList].sort(sortByRating);
    case SortOptions.DEFAULT:
      return [...filmsState.filmsList];

    default:
      return [...filmsState.filmsList];
  }
};
