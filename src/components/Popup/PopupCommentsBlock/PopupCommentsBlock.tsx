import React from 'react';
import { commentList } from '../../../dataBase/comments';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';
import PopupNewComment from '../PopupNewComment/PopupNewComment';

const PopupCommentsBlock = () => {
  return (
    <section className='film-details__comments-wrap'>
      <h3 className='film-details__comments-title'>
        Comments{' '}
        <span className='film-details__comments-count'>
          {commentList.length}
        </span>
      </h3>

      <PopupCommentsList commentList={commentList} />

      <PopupNewComment />
    </section>
  );
};

export default PopupCommentsBlock;
