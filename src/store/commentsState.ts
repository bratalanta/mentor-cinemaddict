import { makeAutoObservable } from 'mobx';
import { Comment } from '../types/comment';

class CommentState {
  commentsList: Comment[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setCommentList(list: Comment[]) {
    this.commentsList = list;
  }
  deleteComment() {}
  addComment() {}
}

export default new CommentState();
