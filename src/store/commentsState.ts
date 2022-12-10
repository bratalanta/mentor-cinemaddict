import { makeAutoObservable, runInAction } from 'mobx';
import http from '../api/http';
import { APIRoute, FetchStatus } from '../const';
import { Comment } from '../types/comment';

class CommentsState {
  commentsList: Comment[] = [];
  fetchStatus = FetchStatus.Idle;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCommentList(id: string) {
    this.fetchStatus = FetchStatus.Pending;
    try {
      const { data } = await http.get(`${APIRoute.Comments}/${id}`);
      runInAction(() => {
        this.commentsList = data;
        this.fetchStatus = FetchStatus.Fulfilled;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchStatus = FetchStatus.Rejected;
      });
    }
  }
}
const commentsState = new CommentsState();

export default commentsState;
