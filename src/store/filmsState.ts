import { TAdaptedFilm } from '../types/adaptedFilm';
import { makeAutoObservable, runInAction } from 'mobx';
import { TUnadaptedFilm } from '../types/unadaptedFilm';
import { adaptFilm } from '../utils/adapter';
import http from '../api/http';
import { APIRoutes, FecthStatus } from '../const';

class FilmsState {
  filmsList: TAdaptedFilm[] = [];
  state = FecthStatus.Idle;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchMovieList() {
    this.state = FecthStatus.Pending;
    try {
      const { data } = await http.get<TUnadaptedFilm[]>(APIRoutes.Movies);
      const adaptedFilms = data.map((film) => adaptFilm(film));
      runInAction(() => {
        this.filmsList = adaptedFilms;
        this.state = FecthStatus.Fulfilled;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
        this.state = FecthStatus.Rejected;
      });
    }
  }
}

export default new FilmsState();
