import { Link } from 'react-router-dom';
import { TAdaptedFilm } from '../../../types/adaptedFilm';
import PopupState from '../../../store/PopupState';
import { observer } from 'mobx-react-lite';
import { getRuntime, getDate } from '../../../utils/utils';
import FilmCardControls from '../FilmCardControls/FilmCardControls';

type FilmCardProps = {
  film: TAdaptedFilm;
};

const FilmCard = observer(({ film }: FilmCardProps) => {
  const { comments } = film;
  const {
    description,
    genre,
    title,
    runtime,
    poster,
    totalRating,
    release: { date },
  } = film.filmInfo;

  return (
    <article className='film-card'>
      <Link to='/' className='film-card__link'>
        <div onClick={() => PopupState.open(film)}>
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
      <FilmCardControls userDetails={film.userDetails} />
    </article>
  );
});

export default FilmCard;
