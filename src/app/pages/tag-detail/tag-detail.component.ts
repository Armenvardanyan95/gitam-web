import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { articlesByTag, finishedLoadingByTag } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';
import { loadArticlesByTag, resetFinishSearch } from 'src/app/state/actions';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.scss']
})
export class TagDetailComponent implements OnInit {

  articles$ = this.store.select(articlesByTag);
  finished$ = this.store.select(finishedLoadingByTag);
  page = 0;
  tagName: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<GlobalState>,
    private title: Title,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.page = 0;
      this.tagName = params.get('name');
      this.title.setTitle(this.tagName);
      this.store.dispatch(resetFinishSearch());
      this.loadArticles();
    });
  }

 loadArticles() {
   this.store.dispatch(loadArticlesByTag({page: ++this.page, size: 10, tagName: this.tagName}));
  }

}
