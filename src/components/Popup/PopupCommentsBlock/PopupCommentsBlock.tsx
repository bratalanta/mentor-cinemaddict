import React from 'react';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';
import PopupNewComment from '../PopupNewComment/PopupNewComment';

function PopupCommentsBlock() {
  return (
    <section className='film-details__comments-wrap'>
      <h3 className='film-details__comments-title'>
        Comments <span className='film-details__comments-count'>4</span>
      </h3>

      <PopupCommentsList />

      <PopupNewComment />
    </section>
  );
}

export default PopupCommentsBlock;
