import React from 'react';
import { commentList } from '../../../dataBase/comments';
import PopupComment from '../PopupComment/PopupComment';

const PopupCommentsList = () => {
  return (
    <ul className='film-details__comments-list'>
      {commentList.map((comment) => (
        <PopupComment {...comment} />
      ))}
    </ul>
  );
};

export default PopupCommentsList;
