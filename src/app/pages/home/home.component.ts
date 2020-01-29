import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { allArticles, finishedLoadingFeed } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';
import { loadArticles } from 'src/app/state/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  articles$ = this.store.select(allArticles);
  finished$ = this.store.select(finishedLoadingFeed);
  page = 1;

  constructor(
    private readonly store: Store<GlobalState>,
  ) { }

 loadArticles() {
   this.store.dispatch(loadArticles({page: this.page++, feedOptions: {size: 10}}));
  }

}
