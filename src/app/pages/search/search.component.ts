import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, map } from 'rxjs/operators';

import { searchResults } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';
import { finishLoadingSearch, searchArticles, resetFinishSearch } from 'src/app/state/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('inp', {static: true}) inputRef: ElementRef<HTMLInputElement>;

  searchResults$ = this.store.select(searchResults);
  finished$ = this.store.select(finishLoadingSearch);
  page = 1;
  query: string;
  destroy$ = new Subject<void>();

  get input() {
    return this.inputRef.nativeElement;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store<GlobalState>,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.page = 0;
      this.query = queryParams.get('query');
      this.loadArticles();
    });

    fromEvent(this.input, 'keyup').pipe(
      debounceTime(300),
      map(() => this.input.value),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
    ).subscribe(query => this.router.navigateByUrl(`/search?query=${query}`));

    this.input.focus();
  }

  loadArticles() {
    this.store.dispatch(searchArticles({page: ++this.page, size: 10, title: this.query}));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.store.dispatch(resetFinishSearch());
  }

}
