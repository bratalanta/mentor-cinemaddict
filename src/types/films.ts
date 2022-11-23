export type TUnadaptedFilmList = TUnadaptedFilm[];

export type TUnadaptedFilm = {
  id: string;
  film_info: TUnadaptedFilmInfo;
  user_details: TUnadaptedUserDetails;
  comments: string[];
};

export type TUnadaptedFilmInfo = {
  title: string;
  alternative_title: string;
  total_rating: number;
  poster: string;
  age_rating: number;
  director: string;
  writers: string[];
  actors: string[];
  release: {
    date: string;
    release_country: string;
  };
  runtime: number;
  genre: string[];
  description: string;
};

export type TUnadaptedUserDetails = {
  watchlist: boolean;
  already_watched: boolean;
  watching_date: string | null;
  favorite: boolean;
};
