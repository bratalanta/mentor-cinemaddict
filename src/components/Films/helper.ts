import dayjs from 'dayjs';
import { FilterOptions, SortOptions } from '../../const';
import filmsState from '../../store/FilmsState';
import { TAdaptedFilm } from '../../types/adaptedFilm';

const sortByDate = (a: TAdaptedFilm, b: TAdaptedFilm) =>
  dayjs(b.filmInfo.release.date).year() - dayjs(a.filmInfo.release.date).year();

const sortByRating = (a: TAdaptedFilm, b: TAdaptedFilm) =>
  b.filmInfo.totalRating - a.filmInfo.totalRating;

export const getCurrentSortedFilms = (arr: TAdaptedFilm[], option: string) => {
  switch (option) {
    case SortOptions.DATE:
      return [...arr].sort(sortByDate);
    case SortOptions.RATING:
      return [...arr].sort(sortByRating);
    case SortOptions.DEFAULT:
      return [...arr];

    default:
      return [...arr];
  }
};

export const getCurrentFilteredFilms = (filter: string | undefined) => {
  switch (filter) {
    case FilterOptions.Watchlist:
      return [...filmsState.filmsList].filter(
        (item) => item.userDetails.watchlist
      );
    case FilterOptions.Histoty:
      return [...filmsState.filmsList].filter(
        (item) => item.userDetails.alreadyWatched
      );
    case FilterOptions.Favorite:
      return [...filmsState.filmsList].filter(
        (item) => item.userDetails.favorite
      );

    default:
      return [...filmsState.filmsList];
  }
};
