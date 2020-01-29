import { ArticleModel as Article } from '../common/models/article';

export type Bookmark = Omit<Article, 'text'> & {bookmarkId: number};

export interface GlobalState {
  isAuth: boolean;
  bookmarks: Bookmark[];
  articles: Article[];
  searchResults: Article[];
  articlesByTag: Article[];
  finishLoading: {
    finishedLoadingFeed: false;
    finishedLoadingByTag: false;
    finishedLoadingSearch: false;
  };
}
