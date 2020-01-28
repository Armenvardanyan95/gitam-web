import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { GlobalState, articlesByTag, finishedLoadingByTag } from 'src/app/state/reducers';
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
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.page = 0;
      this.tagName = params.get('name');
      this.store.dispatch(resetFinishSearch());
      this.loadArticles();
    });
  }

 loadArticles() {
   this.store.dispatch(loadArticlesByTag({page: ++this.page, size: 10, tagName: this.tagName}));
  }

}
