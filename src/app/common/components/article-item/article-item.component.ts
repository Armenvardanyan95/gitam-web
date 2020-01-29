import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticleModel } from '../../models/article';
import { allBookmarkIds } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';
import { map } from 'rxjs/operators';
import { addToBookmarks, removeFromBookmarks } from 'src/app/state/actions';
import { MatBottomSheet } from '@angular/material';
import { ShareOnSocialMediaComponent } from '../share-on-social-media/share-on-social-media.component';

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

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly bottomSheet: MatBottomSheet,
  ) { }

  @Input() article: ArticleModel = null;

  addToBookmarks() {
    this.store.dispatch(addToBookmarks({article: this.article}));
  }

  removeFromBookmarks() {
    this.store.dispatch(removeFromBookmarks({id: this.article.id}));
  }

  shareOnSocialMedia() {
    this.bottomSheet.open(ShareOnSocialMediaComponent, {data: {article: this.article}});
  }

}
