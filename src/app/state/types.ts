import { ArticleModel as Article } from '../common/models/article';
import { PreferencesState } from './global/preferences.reducer';
import { ArticleState } from './articles/articles.reducer';
import { NavigationState } from './global/navigation.reducer';
import { TagsState } from './tags/tags.reducer';
import { LoadingState } from './loading/loading.reducer';


export type Bookmark = Omit<Article, 'text'> & {bookmarkId: number};

export interface GlobalState {
  isAuth: boolean;
  bookmarks: Bookmark[];
  articles: {
    articleList: Article[];
    page: number;
    articleDetails: Article;
    loading: ArticleState['loading'];
  };
  tags: TagsState;
  searchResults: Article[];
  articlesByTag: Article[];
  finishLoading: LoadingState;
  preferences: PreferencesState;
  navigation: NavigationState;
}
