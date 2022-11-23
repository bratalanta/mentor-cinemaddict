import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { TAdaptedFilm } from '../../../types/adaptedFilms';
import popup from '../../../store/Popup';
import { observer } from 'mobx-react-lite';
import { getActiveClass, getRuntime, getYear } from '../../../utils/utils';
import { ActiveClass } from '../../../const';
dayjs().format();

const FilmCard = observer((props: TAdaptedFilm) => {
  const { id, comments } = props;
  const {
    description,
    genre,
    title,
    runtime,
    poster,
    totalRating,
    release: { date },
  } = props.filmInfo;
  const { alreadyWatched, favorite, watchlist } = props.userDetails;

  return (
    <article className='film-card'>
      <Link to='/' className='film-card__link'>
        <div onClick={() => popup.open(id)}>
          <h3 className='film-card__title'>{title}</h3>
          <p className='film-card__rating'>{totalRating}</p>
          <p className='film-card__info'>
            <span className='film-card__year'>{getYear(date)}</span>
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
          className={`film-card__controls-item film-card__controls-item--add-to-watchlist ${getActiveClass(
            watchlist,
            ActiveClass.FilmCardButton
          )}`}
          type='button'
        >
          Add to watchlist
        </button>
        <button
          className={`film-card__controls-item film-card__controls-item--mark-as-watched ${getActiveClass(
            alreadyWatched,
            ActiveClass.FilmCardButton
          )}`}
          type='button'
        >
          Mark as watched
        </button>
        <button
          className={`film-card__controls-item film-card__controls-item--favorite ${getActiveClass(
            favorite,
            ActiveClass.FilmCardButton
          )}`}
          type='button'
        >
          Mark as favorite
        </button>
      </div>
    </article>
  );
});

export default FilmCard;
