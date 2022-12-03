import { makeAutoObservable, runInAction } from 'mobx';
import http from '../api/http';
import { APIRoutes, FetchStatus } from '../const';
import { Comment } from '../types/comment';
import { LocalError } from '../types/localError';

class CommentsState {
  commentsList: Comment[] = [];
  fetchStatus = FetchStatus.Idle;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCommentList(id: string) {
    this.fetchStatus = FetchStatus.Pending;
    try {
      const { data } = await http.get(`${APIRoutes.Comments}/${id}`);
      runInAction(() => {
        this.commentsList = data;
        this.fetchStatus = FetchStatus.Fulfilled;
      });
    } catch (error: any) {
      runInAction(() => {
        this.fetchStatus = FetchStatus.Rejected;
      });
    }
  }
}
const commentsState = new CommentsState();

export default commentsState;
