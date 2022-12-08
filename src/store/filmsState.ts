import { TAdaptedFilm } from '../types/adaptedFilm';
import { makeAutoObservable, runInAction } from 'mobx';
import { TUnadaptedFilm } from '../types/unadaptedFilm';
import { adaptFilm } from '../utils/adapter';
import http from '../api/http';
import { APIRoute, FetchStatus, SortOption } from '../const';
import { sortByDate, sortByRating } from '../utils/utils';

class FilmsState {
  filmsList: TAdaptedFilm[] = [];
  fetchStatus = FetchStatus.Idle;
  filteredFilms: TAdaptedFilm[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMovieList() {
    this.fetchStatus = FetchStatus.Pending;
    try {
      const { data } = await http.get<TUnadaptedFilm[]>(APIRoute.Movies);
      const adaptedFilms = data.map((film) => adaptFilm(film));
      runInAction(() => {
        this.filmsList = adaptedFilms;
        this.filteredFilms = adaptedFilms;
        this.fetchStatus = FetchStatus.Fulfilled;
      });
    } catch (error: any) {
      runInAction(() => {
        console.log(error);
        this.fetchStatus = FetchStatus.Rejected;
      });
    }
  }

  sort(sortOption: string) {
    switch (sortOption) {
      case SortOption.DATE:
        return [...this.filteredFilms].sort(sortByDate);
      case SortOption.RATING:
        return [...this.filteredFilms].sort(sortByRating);

      default:
        return [...this.filteredFilms];
    }
  }

  filter(filterOption: string) {
    this.filteredFilms = this.filmsList.filter(
      (film) => film.userDetails[filterOption]
    );

    if (!this.filteredFilms.length) {
      this.filteredFilms = this.filmsList;
    }
  }
}

const filmsState = new FilmsState();

export default filmsState;
