import { makeAutoObservable } from 'mobx';
import { Comment } from '../types/comment';

class CommentsState {
  commentsList: Comment[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setCommentList(list: Comment[]) {
    this.commentsList = list;
  }
}

export default new CommentsState();
