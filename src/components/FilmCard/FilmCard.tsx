import React from 'react';

function FilmCard(props) {
  return (
    <article className='film-card'>
      <a href='#' className='film-card__link'>
        <h3 className='film-card__title'>The Man with the Golden Arm</h3>
        <p className='film-card__rating'>9.0</p>
        <p className='film-card__info'>
          <span className='film-card__year'>1955</span>
          <span className='film-card__duration'>1h 59m</span>
          <span className='film-card__genre'>Drama</span>
        </p>
        <img
          src='./images/posters/the-man-with-the-golden-arm.jpg'
          alt=''
          className='film-card__poster'
        />
        <p className='film-card__description'>
          Frankie Machine (Frank Sinatra) is released from the federal Narcotic
          Farm in Lexington, Kentucky with a set of drums and a new outlook on…
        </p>
        <span className='film-card__comments'>18 comments</span>
      </a>
      <div className='film-card__controls'>
        <button
          className='film-card__controls-item film-card__controls-item--add-to-watchlist'
          type='button'
        >
          Add to watchlist
        </button>
        <button
          className='film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active'
          type='button'
        >
          Mark as watched
        </button>
        <button
          className='film-card__controls-item film-card__controls-item--favorite'
          type='button'
        >
          Mark as favorite
        </button>
      </div>
    </article>
  );
}

export default FilmCard;
