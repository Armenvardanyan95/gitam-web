import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { zip } from 'rxjs';

import { ArticleModel } from '../../models/article';
import { allBookmarkIds, loadingBookmarks } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';
import { map, delay } from 'rxjs/operators';
import { addToBookmarks, removeFromBookmarks } from 'src/app/state/actions';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShareOnSocialMediaComponent } from '../share-on-social-media/share-on-social-media.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent {

  isInBookmarks$ = this.store.select(allBookmarkIds).pipe(
    map((ids: number[]) => ids.includes(this.article.id)),
  );
  bookmarkStatusChanging = this.store.select(loadingBookmarks).pipe(
    map(ids => ids.has(this.article.id)),
  );
  isDarkMode$ = this.store.select(state => state.preferences.darkMode);

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly bottomSheet: MatBottomSheet,
    private readonly snackbar: MatSnackBar,
  ) { }

  @Input() article: ArticleModel = null;

  addToBookmarks() {
    this.store.dispatch(addToBookmarks({article: this.article}));
  }

  removeFromBookmarks() {
    this.store.dispatch(removeFromBookmarks({id: this.article.id}));
  }

  shareOnSocialMedia() {
    const sheet = this.bottomSheet.open(ShareOnSocialMediaComponent, {data: {article: this.article}});
    sheet.instance.dismissed.subscribe(() => {
      sheet.dismiss();
    });

    zip(
      sheet.afterDismissed(),
      sheet.instance.copied,
    ).pipe(
      delay(100),
    ).subscribe(() => this.snackbar.open('Հղումը հաջողությամբ պատճենվել է', 'Լավ'));
  }

}
