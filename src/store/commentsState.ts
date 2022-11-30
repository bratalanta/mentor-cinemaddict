import { makeAutoObservable, runInAction } from 'mobx';
import http from '../api/http';
import { APIRoutes, FecthStatus } from '../const';
import { Comment } from '../types/comment';

class CommentsState {
  commentsList: Comment[] = [];
  state = FecthStatus.Idle;
  constructor() {
    makeAutoObservable(this);
  }
  async fetchCommentList(id: string) {
    this.state = FecthStatus.Pending;
    try {
      const { data } = await http.get(`${APIRoutes.Comments}/${id}`);
      runInAction(() => {
        this.commentsList = data;
        this.state = FecthStatus.Fulfilled;
      });
    } catch (error) {
      runInAction(() => {
        this.state = FecthStatus.Rejected;
      });
    }
  }
  resetCommentList() {
    this.commentsList = [];
  }
}

export default new CommentsState();
