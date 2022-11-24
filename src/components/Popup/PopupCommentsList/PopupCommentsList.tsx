import React from 'react';
import { commentList } from '../../../dataBase/comments';
import PopupComment from '../PopupComment/PopupComment';

const PopupCommentsList = () => {
  return (
    <ul className='film-details__comments-list'>
      {commentList.map((comment) => (
        <PopupComment commentInfo={comment} key={comment.id} />
      ))}
    </ul>
  );
};

export default PopupCommentsList;
