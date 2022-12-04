const PopupControl = {
  WatchList: {
    title: 'Add to watchlist',
    name: 'watchlist',
  },
  Watched: {
    title: 'Already watched',
    name: 'watched',
  },
  Favorite: {
    title: 'Add to favorites',
    name: 'favorite',
  },
} as const;

const enum APIRoutes {
  Movies = '/movies',
  Comments = '/comments',
}

const enum FetchStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  Idle = 'idle',
  Fulfilled = 'fulfilled',
}

const SortOptions = {
  DEFAULT: 'default',
  DATE: 'date',
  RATING: 'rating',
} as const;

const FilterOptions = {
  'All movies': 'all',
  Watchlist: 'watchList',
  Histoty: 'alreadyWatched',
  Favorite: 'favorite',
} as const;

export { PopupControl, APIRoutes, FetchStatus, SortOptions, FilterOptions };
