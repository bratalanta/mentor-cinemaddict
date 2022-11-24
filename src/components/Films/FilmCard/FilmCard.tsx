import React from 'react';
import { Link } from 'react-router-dom';
import { TAdaptedFilm } from '../../../types/adaptedFilm';
import popupState from '../../../store/popupState';
import { observer } from 'mobx-react-lite';
import { getRuntime, getDate } from '../../../utils/utils';

type FilmCardProps = {
  film: TAdaptedFilm;
};

const FilmCard = observer(({ film }: FilmCardProps) => {
  const { id, comments } = film;
  const {
    description,
    genre,
    title,
    runtime,
    poster,
    totalRating,
    release: { date },
  } = film.filmInfo;
  const { alreadyWatched, favorite, watchlist } = film.userDetails;

  return (
    <article className='film-card'>
      <Link to='/' className='film-card__link'>
        <div onClick={() => popupState.open(id)}>
          <h3 className='film-card__title'>{title}</h3>
          <p className='film-card__rating'>{totalRating}</p>
          <p className='film-card__info'>
            <span className='film-card__year'>{getDate(date, 'YYYY')}</span>
            <span className='film-card__duration'>{getRuntime(runtime)}</span>
            <span className='film-card__genre'>{genre[0]}</span>
          </p>
          <img src={poster} alt='poster' className='film-card__poster' />
          <p className='film-card__description'>{description}</p>
          <span className='film-card__comments'>
            {comments.length} comments
          </span>
        </div>
      </Link>
      <div className='film-card__controls'>
        <button
          className={`film-card__controls-item film-card__controls-item--add-to-watchlist ${
            watchlist && 'film-card__controls-item--active'
          }`}
          type='button'
        >
          Add to watchlist
        </button>
        <button
          className={`film-card__controls-item film-card__controls-item--mark-as-watched ${
            alreadyWatched && 'film-card__controls-item--active'
          }`}
          type='button'
        >
          Mark as watched
        </button>
        <button
          className={`film-card__controls-item film-card__controls-item--favorite ${
            favorite && 'film-card__controls-item--active'
          }`}
          type='button'
        >
          Mark as favorite
        </button>
      </div>
    </article>
  );
});

export default FilmCard;
