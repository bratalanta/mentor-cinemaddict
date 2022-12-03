import { TAdaptedFilm } from '../types/adaptedFilm';
import { makeAutoObservable, runInAction } from 'mobx';
import { TUnadaptedFilm } from '../types/unadaptedFilm';
import { adaptFilm } from '../utils/adapter';
import http from '../api/http';
import { APIRoutes, FetchStatus } from '../const';
import { LocalError } from '../types/localError';

class FilmsState {
  filmsList: TAdaptedFilm[] = [];
  fetchStatus = FetchStatus.Idle;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMovieList() {
    this.fetchStatus = FetchStatus.Pending;
    try {
      const { data } = await http.get<TUnadaptedFilm[]>(APIRoutes.Movies);
      const adaptedFilms = data.map((film) => adaptFilm(film));
      runInAction(() => {
        this.filmsList = adaptedFilms;
        this.fetchStatus = FetchStatus.Fulfilled;
      });
    } catch (error: any) {
      runInAction(() => {
        console.log(error);
        this.fetchStatus = FetchStatus.Rejected;
      });
    }
  }
}

const filmsState = new FilmsState();

export default filmsState;
