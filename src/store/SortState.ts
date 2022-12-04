import { makeAutoObservable } from 'mobx';
import { SortOptionValue } from '../types/sort';

class SortState {
  activeSortOption: SortOptionValue | undefined = 'default';
  constructor() {
    makeAutoObservable(this);
  }

  setActiveSortOption(option: SortOptionValue) {
    this.activeSortOption = option;
  }
}

const sortState = new SortState();

export default sortState;
