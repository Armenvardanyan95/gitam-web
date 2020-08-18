import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { mergeMap, switchMap, takeUntil, filter, map, tap, catchError, withLatestFrom } from 'rxjs/operators';

import { loadArticles, loadArticlesSuccess, finishLoadingFeed, searchArticles, initiateSearchArticles,
         continueSearchArticles, initiateSearchArticlesSuccess, finishLoadingSearch, continueSearchArticlesSuccess,
         loadArticlesByTag, reloadArticlesByTag, continueLoadingArticlesByTag, reloadArticlesByTagSuccess, finishLoadingByTag,
         continueLoadingArticlesByTagSuccess } from '../actions';
import { ArticleService } from 'src/app/common/services/article.service';
import { finishedLoadingFeed } from '../selectors';
import { GlobalState } from '../types';
import { loadArticleDetails, loadArticleDetailsSuccess, loadArticleDetailsError, setArticleLoader } from './articles.actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { selectTag, deselectTag, deselectAllTags } from '../tags/tags.actions';

@Injectable()
export class ArticlesEffects {

  loadFeed$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticles),
    // takeUntil(this.store.select(finishedLoadingFeed).pipe(filter(finished => finished))),
    withLatestFrom(
      this.store.select(state => state.articles.page),
      this.store.select(state => state.tags.selectedTags),
    ),
    mergeMap(([options, page, tags]) => this.articleService.getFeed(
      page, {...options.feedOptions, tags},
    ).pipe(
      switchMap(list => {
        let actions: Action[] = [loadArticlesSuccess({articles: list.data})];
        const isFinished = list.total < page * options.feedOptions.size;
        actions = isFinished ? [...actions, finishLoadingFeed()] : actions;
        return actions;
      }),
    )),
  ));

  loadFeedBySelectedTags$ = createEffect(() => this.actions$.pipe(
    ofType(selectTag, deselectTag, deselectAllTags),
    map(() => loadArticles({feedOptions: {size: 10}})),
  ));

  search$ = createEffect(() => this.actions$.pipe(
    ofType(searchArticles),
    map(query => query.page === 1 ? initiateSearchArticles(query) : continueSearchArticles(query)),
  ));

  initiateSearch$ = createEffect(() => this.actions$.pipe(
    ofType(initiateSearchArticles),
    mergeMap(query => from(this.articleService.getArticles(query.page, query.size, query.title)).pipe(
      switchMap(list => {
        let actions: Action[] = [initiateSearchArticlesSuccess({articles: list.data})];
        const isFinished = list.total < query.page * query.size;
        actions = isFinished ? [...actions, finishLoadingSearch()] : actions;
        return actions;
      }),
    )),
  ));

  continueSearch$ = createEffect(() => this.actions$.pipe(
    ofType(initiateSearchArticles),
    mergeMap(query => from(this.articleService.getArticles(query.page, query.size, query.title)).pipe(
      switchMap(list => {
        let actions: Action[] = [continueSearchArticlesSuccess({articles: list.data})];
        const isFinished = list.total < query.page * query.size;
        actions = isFinished ? [...actions, finishLoadingSearch()] : actions;
        return actions;
      }),
    )),
  ));

  loadByTag$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticlesByTag),
    map(query => query.page === 1 ? reloadArticlesByTag(query) : continueLoadingArticlesByTag(query)),
  ));

  reloadByTag$ = createEffect(() => this.actions$.pipe(
    ofType(reloadArticlesByTag),
    mergeMap(options => this.articleService.getFeed(options.page, {size: options.size, tags: [options.tagName]}).pipe(
      switchMap(list => {
        let actions: Action[] = [reloadArticlesByTagSuccess({articles: list.data})];
        const isFinished = list.total < options.page * options.size;
        actions = isFinished ? [...actions, finishLoadingByTag()] : actions;
        return actions;
      }),
    )),
  ));

  continueLoadingByTag$ = createEffect(() => this.actions$.pipe(
    ofType(continueLoadingArticlesByTag),
    mergeMap(options => this.articleService.getFeed(options.page, {size: options.size, tags: [options.tagName]}).pipe(
      switchMap(list => {
        let actions: Action[] = [continueLoadingArticlesByTagSuccess({articles: list.data})];
        const isFinished = list.total < options.page * options.size;
        actions = isFinished ? [...actions, finishLoadingByTag()] : actions;
        return actions;
      }),
    )),
  ));

  navigatedToArticleDetails$ = createEffect(() => this.actions$.pipe(
    ofType(routerNavigationAction),
    filter(({payload}) => payload.event.url.includes('article')),
    map(({payload}) => loadArticleDetails({
      id: +payload.routerState.root.firstChild.params.id,
    }))
  ));

  loadArticleDetails$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticleDetails),
    mergeMap(({id}) => this.articleService.getArticle(id).pipe(
      map(article => loadArticleDetailsSuccess({article})),
      catchError(error => of(loadArticleDetailsError(error))),
    )),
  ));

  setArticleDetailsLoading$ = createEffect(() => this.actions$.pipe(
    ofType(loadArticleDetails, loadArticleDetailsSuccess, loadArticleDetailsError),
    map(action => setArticleLoader({articleDetails: action.type === loadArticleDetails.type}))
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<GlobalState>,
    private readonly articleService: ArticleService,
  ) {}
}
