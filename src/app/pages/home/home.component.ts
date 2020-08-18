import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { allArticles, finishedLoadingFeed } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';
import { loadArticles } from 'src/app/state/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles$ = this.store.select(allArticles);
  finished$ = this.store.select(finishedLoadingFeed);

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Գիտ․եմ');
    this.loadArticles();
  }

 loadArticles() {
   this.store.dispatch(loadArticles({feedOptions: {size: 10}}));
  }

}
