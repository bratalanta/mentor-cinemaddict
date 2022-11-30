import React from 'react';
import { observer } from 'mobx-react-lite';
import commentsState from '../../../store/CommentsState';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';
import PopupNewComment from '../PopupNewComment/PopupNewComment';

const PopupCommentsBlock = observer(() => {
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
