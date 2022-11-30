import { makeAutoObservable } from 'mobx';
import { TAdaptedFilm } from '../types/adaptedFilm';

class PopupState {
  isActive = false;
  activeId = '';
  activeFilm = {} as TAdaptedFilm;
  constructor() {
    makeAutoObservable(this);
  }

  open(film: TAdaptedFilm) {
    this.isActive = true;
    this.activeFilm = film;
    this.activeId = film.id;
    document.body.style.overflowY = 'hidden';
  }

  close() {
    this.isActive = false;
    this.activeFilm = {} as TAdaptedFilm;
    this.activeId = '';
  }
}

export default new PopupState();
