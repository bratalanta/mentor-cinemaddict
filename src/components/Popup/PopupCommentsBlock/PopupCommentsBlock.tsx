import React from 'react';
import { observer } from 'mobx-react-lite';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';
import PopupNewComment from '../PopupNewComment/PopupNewComment';
import Loader from '../../Loader/Loader';
import { FecthStatus } from '../../../const';
import CommentsState from '../../../store/CommentsState';

const PopupCommentsBlock = observer(() => {
  if (CommentsState.state === FecthStatus.Pending) {
    return <Loader />;
  }
  if (CommentsState.state === FecthStatus.Rejected) {
    return <div>Произошла ошибка</div>;
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
