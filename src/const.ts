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

const enum APIRoute {
  Movies = '/movies',
  Comments = '/comments',
}

const enum FetchStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  Idle = 'idle',
  Fulfilled = 'fulfilled',
}

const SortOption = {
  DEFAULT: 'default',
  DATE: 'date',
  RATING: 'rating',
} as const;

const FilterOption = {
  'All movies': 'all',
  Watchlist: 'watchList',
  History: 'alreadyWatched',
  Favorite: 'favorite',
} as const;

export { PopupControl, APIRoute, FetchStatus, SortOption, FilterOption };
