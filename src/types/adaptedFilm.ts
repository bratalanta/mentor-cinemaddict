export type TAdaptedFilm = {
  id: string;
  filmInfo: TAdaptedFilmInfo;
  userDetails: TAdaptedUserDetails;
  comments: string[];
};

export type TAdaptedFilmInfo = {
  title: string;
  alternativeTitle: string;
  totalRating: number;
  poster: string;
  ageRating: number;
  director: string;
  writers: string[];
  actors: string[];
  release: {
    date: string;
    releaseCountry: string;
  };
  runtime: number;
  genre: string[];
  description: string;
};

export type TAdaptedUserDetails = {
  watchList: boolean;
  alreadyWatched: boolean;
  watchingDate: string;
  favorite: boolean;
  [name: string]: boolean | string; //Добавлен для поиска по динамическому ключу для фильтрации в filmsState
};
