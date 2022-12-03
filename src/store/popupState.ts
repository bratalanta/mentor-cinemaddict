import { makeAutoObservable } from 'mobx';
import { TAdaptedFilm } from '../types/adaptedFilm';

class PopupState {
  activeFilm = {} as TAdaptedFilm;
  constructor() {
    makeAutoObservable(this);
  }

  open(film: TAdaptedFilm) {
    this.activeFilm = film;
    document.body.style.overflowY = 'hidden';
  }

  close() {
    this.activeFilm = {} as TAdaptedFilm;
  }
}

const popupState = new PopupState();

export default popupState;
