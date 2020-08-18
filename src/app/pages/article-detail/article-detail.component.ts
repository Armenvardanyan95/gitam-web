import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import { map, pluck, withLatestFrom, startWith, takeUntil, filter, takeWhile } from 'rxjs/operators';

import { ArticleModel as Article } from 'src/app/common/models/article';
import { allBookmarkIds, loadingBookmarks } from 'src/app/state/selectors';
import { addToBookmarks, removeFromBookmarks } from 'src/app/state/actions';
import { ShareOnSocialMediaComponent } from 'src/app/common/components/share-on-social-media/share-on-social-media.component';
import { User } from 'src/app/common/models/user';
import { GlobalState } from 'src/app/state/types';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, AfterViewChecked {
  @ViewChild('pageContainer') pageContainer: ElementRef<HTMLDivElement>;
  article$ = this.store.select(state => this.sanitize(state.articles.articleDetails));
  author$ = this.article$.pipe(
    startWith({} as Article),
    map(article => article.author as User),
  );
  isInBookmarks$ = this.store.select(allBookmarkIds).pipe(
    withLatestFrom(this.article$.pipe(pluck('id'))),
    map(([ids, id]: [number[], number]) => ids.includes(id)),
  );
  bookmarkStatusChanging = this.store.select(loadingBookmarks).pipe(
    withLatestFrom(this.article$.pipe(pluck('id'))),
    map(([ids, id]) => ids.has(id)),
  );
  isDarkMode$ = this.store.select(state => state.preferences.darkMode);
  loading$ = this.store.select(state => state.articles.loading.articleDetails);
  viewChecked$ = new Subject<void>();
  destroy$ = new Subject<void>();

  constructor(
    private readonly location: Location,
    private readonly store: Store<GlobalState>,
    private readonly bottomSheet: MatBottomSheet,
    private readonly sanitizer: DomSanitizer,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.article$
      .pipe(
        filter(article => article !== null),
        map(article => article.title),
        takeUntil(this.destroy$),
      )
      .subscribe(title => this.title.setTitle(title));

    this.viewChecked$.pipe(
      filter(() => !!this.pageContainer.nativeElement),
      map(() => ({
        images: Array.from(
          this.pageContainer.nativeElement.querySelectorAll('img'),
        ),
        iframes: Array.from(
          this.pageContainer.nativeElement.querySelectorAll('iframe'),
        ),
      })),
    ).subscribe(({images, iframes}) => {
      images.slice(1, images.length).forEach(image => image.style.width = '100%');
      iframes.forEach(iframe => iframe.style.width = '100%');
    });
  }

  ngAfterViewChecked() {
    this.viewChecked$.next();
  }

  addToBookmarks(article: Article) {
    this.store.dispatch(addToBookmarks({article}));
  }

  removeFromBookmarks(id: number) {
    this.store.dispatch(removeFromBookmarks({id}));
  }

  shareOnSocialMedia(article: Article) {
    this.bottomSheet.open(ShareOnSocialMediaComponent, {data: {article}});
  }

  back() {
    this.location.back();
  }

  private sanitize(article: Article): Article {
    return article ? ({
      ...article,
      text: this.sanitizer.bypassSecurityTrustHtml(
        this.desanitizeForIframes(article.text)
      ) as string,
    }) : null;
  }

  private desanitizeForIframes(text: string): string {
    return text
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
  }

}
