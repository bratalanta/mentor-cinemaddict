import { makeAutoObservable } from 'mobx';

class PopupState {
  isActive = false;
  activeId: string = '';
  constructor() {
    makeAutoObservable(this);
  }

  open(id: string) {
    this.isActive = true;
    this.activeId = id;
    document.body.style.overflowY = 'hidden';
  }

  close() {
    this.isActive = false;
    this.activeId = '';
  }
}

export default new PopupState();
