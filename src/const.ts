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

export { PopupControl, APIRoutes, FetchStatus };
