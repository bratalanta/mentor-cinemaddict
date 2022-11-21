import React from 'react';
import PopupCommentEditor from '../PopupCommentEditor/PopupCommentEditor';
import PopupCommentsList from '../PopupCommentsList/PopupCommentsList';

function PopupComments(props) {
  return (
    <section className='film-details__comments-wrap'>
      <h3 className='film-details__comments-title'>
        Comments <span className='film-details__comments-count'>4</span>
      </h3>

      <PopupCommentsList />

      <PopupCommentEditor />
    </section>
  );
}

export default PopupComments;
