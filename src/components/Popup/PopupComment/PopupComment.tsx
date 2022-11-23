import React from 'react';
import { Comment } from '../../../types/comment';
import { getCommentDate } from '../../../utils/utils';

const PopupComment = (props: Comment) => {
  const { author, comment, date, emotion, id } = props;
  return (
    <li className='film-details__comment'>
      <span className='film-details__comment-emoji'>
        <img
          src={`./images/emoji/${emotion}.png`}
          width='55'
          height='55'
          alt='emoji-smile'
        />
      </span>
      <div>
        <p className='film-details__comment-text'>{comment}</p>
        <p className='film-details__comment-info'>
          <span className='film-details__comment-author'>{author}</span>
          <span className='film-details__comment-day'>
            {getCommentDate(date)}
          </span>
          <button className='film-details__comment-delete'>Delete</button>
        </p>
      </div>
    </li>
  );
};

export default PopupComment;
