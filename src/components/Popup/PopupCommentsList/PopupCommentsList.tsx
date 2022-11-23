import React from 'react';
import PopupComment from '../PopupComment/PopupComment';

const PopupCommentsList = () => {
  return (
    <ul className='film-details__comments-list'>
      <PopupComment />
      <PopupComment />
      <PopupComment />
      <PopupComment />
    </ul>
  );
};

export default PopupCommentsList;
