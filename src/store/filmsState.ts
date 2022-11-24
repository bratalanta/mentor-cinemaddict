import { TAdaptedFilm } from '../types/adaptedFilm';
import { makeAutoObservable } from 'mobx';
import { TUnadaptedFilm } from '../types/unadaptedFilm';
import { adaptFilm } from '../utils/adapter';

class FilmsState {
  filmsList: TAdaptedFilm[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setMovieList(list: TUnadaptedFilm[]): void {
    this.filmsList = list.map((film) => adaptFilm(film));
  }
}

export default new FilmsState();
