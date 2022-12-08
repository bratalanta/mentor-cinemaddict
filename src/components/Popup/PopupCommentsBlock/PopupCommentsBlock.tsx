import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';
import PopupNewComment from '../PopupNewComment/PopupNewComment';
import Loader from '../../Loader/Loader';
import { FetchStatus } from '../../../const';
import commentsState from '../../../store/commentsState';
import Error from '../../Error/Error';
import popupState from '../../../store/popupState';

const PopupCommentsBlock = observer(() => {
  useEffect(() => {
    if (popupState.activeFilm.id) {
      commentsState.fetchCommentList(popupState.activeFilm.id);
    }
  }, []);

  if (commentsState.fetchStatus === FetchStatus.Pending) {
    return <Loader />;
  }

  if (commentsState.fetchStatus === FetchStatus.Rejected) {
    return <Error />;
  }

  return (
    <section className='film-details__comments-wrap'>
      <h3 className='film-details__comments-title'>
        Comments{' '}
        <span className='film-details__comments-count'>
          {commentsState.commentsList.length}
        </span>
      </h3>
      <PopupCommentsList commentList={commentsState.commentsList} />
      <PopupNewComment />
    </section>
  );
});

export default PopupCommentsBlock;
