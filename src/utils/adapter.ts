import { TAdaptedFilm } from '../types/adaptedFilm';
import { TUnadaptedFilm } from '../types/unadaptedFilm';

export function adaptFilm(film: TUnadaptedFilm): TAdaptedFilm {
  const { film_info: filmInfo, user_details: userDetails, ...filmProps } = film;
  const {
    age_rating: ageRating,
    alternative_title: alternativeTitle,
    total_rating: totalRating,
    release,
    ...filmInfoProps
  } = film.film_info;
  const {
    already_watched: alreadyWatched,
    watching_date: watchingDate,
    watchlist: watchList,
    ...userProps
  } = film.user_details;
  return {
    ...filmProps,
    filmInfo: {
      ...filmInfoProps,
      ageRating,
      alternativeTitle,
      totalRating,
      release: {
        ...release,
        releaseCountry: release.release_country,
      },
    },
    userDetails: {
      ...userProps,
      alreadyWatched,
      watchingDate,
      watchList,
    },
  };
}
