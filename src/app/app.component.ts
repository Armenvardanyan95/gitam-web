import { Component, OnInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subject, partition, interval } from 'rxjs';
import { takeUntil, map, startWith } from 'rxjs/operators';

import { appLoaded } from './state/actions';
import { GlobalState } from './state/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('#navLoader') loaderStripe: ElementRef<HTMLDivElement>;
  isDarkMode$ = this.store.select(state => state.preferences.darkMode);
  isNavigating$ = this.store.select(state => state.navigation.navigating);
  destroy$ = new Subject<void>();
  hasScroll$ = interval(200).pipe(
    startWith(false),
    map(() => {
      const body = this.document.body;
      const html = this.document.documentElement;

      const height = Math.max( body.scrollHeight, body.offsetHeight,
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
      return height > window.innerHeight;
    }),
    takeUntil(this.destroy$),
  );

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly overlayContainer: OverlayContainer,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit() {
    this.store.dispatch(appLoaded());

    const [isDarkMode$, isLightMode$] = partition(
      this.isDarkMode$.pipe(takeUntil(this.destroy$)),
      e => e,
    );

    isDarkMode$.subscribe(() => {
      this.document.body.classList.add('dark-mode');
      this.overlayContainer.getContainerElement().classList.add('theme-alternate');
    });
    isLightMode$.subscribe(() => {
      this.document.body.classList.remove('dark-mode');
      this.overlayContainer.getContainerElement().classList.remove('theme-alternate');
    });
  }

  scrollUp() {
    const isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1;
    isIE ? window.scroll(0, 0) : window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
