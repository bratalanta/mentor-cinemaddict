import { observer } from 'mobx-react-lite';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';
import PopupNewComment from '../PopupNewComment/PopupNewComment';
import Loader from '../../Loader/Loader';
import { FetchStatus } from '../../../const';
import CommentsState from '../../../store/CommentsState';
import Error from '../../Error/Error';

const PopupCommentsBlock = observer(() => {
  if (CommentsState.fetchStatus === FetchStatus.Pending) {
    return <Loader />;
  }
  if (CommentsState.fetchStatus === FetchStatus.Rejected) {
    return <Error error={CommentsState.fetchError} />;
  }
  return (
    <section className='film-details__comments-wrap'>
      <h3 className='film-details__comments-title'>
        Comments{' '}
        <span className='film-details__comments-count'>
          {CommentsState.commentsList.length}
        </span>
      </h3>
      <PopupCommentsList commentList={CommentsState.commentsList} />
      <PopupNewComment />
    </section>
  );
});

export default PopupCommentsBlock;
