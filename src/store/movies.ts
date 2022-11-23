import { TAdaptedFilm } from '../types/adaptedFilms';
import { makeAutoObservable } from 'mobx';
import { TUnadaptedFilm } from '../types/films';
import { adaptFilm } from '../utils/adapter';

class Movies {
  movieList: TAdaptedFilm[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setMovieList(list: TUnadaptedFilm[]): void {
    this.movieList = list.map((film) => adaptFilm(film));
  }
}

export default new Movies();
