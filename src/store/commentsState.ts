import { makeAutoObservable, runInAction } from 'mobx';
import http from '../api/http';
import { APIRoutes, FetchStatus } from '../const';
import { Comment } from '../types/comment';
import { LocalError } from '../types/localError';

class CommentsState {
  commentsList: Comment[] = [];
  fetchStatus = FetchStatus.Idle;
  fetchError = {} as LocalError;
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
        this.fetchError = {
          status: error.response.status,
          message: error.code,
        };
      });
    }
  }
}

export default new CommentsState();
