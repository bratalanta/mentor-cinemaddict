import React from 'react';
import { Comment } from '../../../types/comment';
import PopupComment from '../PopupComment/PopupComment';

type PopupCommentsListProps = {
  commentList: Comment[];
};

const PopupCommentsList = ({ commentList }: PopupCommentsListProps) => {
  return (
    <ul className='film-details__comments-list'>
      {commentList.map((comment) => (
        <PopupComment commentInfo={comment} key={comment.id} />
      ))}
    </ul>
  );
};

export default PopupCommentsList;
