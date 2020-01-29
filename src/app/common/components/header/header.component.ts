import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ENTER } from '@angular/cdk/keycodes';
import { Store } from '@ngrx/store';
import { fromEvent, Subject, Observable, merge } from 'rxjs';
import { takeUntil, map, mapTo } from 'rxjs/operators';

import { GlobalState } from 'src/app/state/types';
import { signOut } from 'src/app/state/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isAuth$ = this.store.select(state => state.isAuth);
  search$ = new Subject<void>();
  searchOpen$: Observable<boolean>;
  destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly store: Store<GlobalState>,
  ) { }

  ngAfterViewInit() {
    this.searchOpen$ = merge(
      fromEvent(document.body, 'click'),
      this.search$.pipe(mapTo(true)),
    ).pipe(
      map(event => (event instanceof Event) ? false : event),
      takeUntil(this.destroy$),
    );
  }

  search(event: KeyboardEvent, query: string) {
    if (event.keyCode === ENTER) {
      this.router.navigateByUrl(`/search?query=${query}`);
    }
  }

  signOut() {
    this.store.dispatch(signOut());
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
