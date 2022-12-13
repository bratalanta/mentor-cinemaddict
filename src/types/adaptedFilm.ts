export interface TAdaptedFilm {
  id: string;
  filmInfo: TAdaptedFilmInfo;
  userDetails: TAdaptedUserDetails;
  comments: string[];
}

export interface TAdaptedFilmInfo {
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
}

export interface TAdaptedUserDetails {
  watchlist: boolean;
  alreadyWatched: boolean;
  watchingDate: string;
  favorite: boolean;
}
