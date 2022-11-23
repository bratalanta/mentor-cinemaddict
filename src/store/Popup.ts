import { makeAutoObservable } from 'mobx';

class Popup {
  isActive = false;
  activeId: string = '';
  constructor() {
    makeAutoObservable(this);
  }

  open(id: string) {
    this.isActive = true;
    this.activeId = id;
  }

  close() {
    this.isActive = false;
    this.activeId = '';
  }
}

export default new Popup();
