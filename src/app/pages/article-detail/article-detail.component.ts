import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { ArticleService } from 'src/app/common/services/article.service';
import { ArticleModel } from 'src/app/common/models/article';
import { allBookmarkIds } from 'src/app/state/selectors';
import { addToBookmarks, removeFromBookmarks } from 'src/app/state/actions';
import { ShareOnSocialMediaComponent } from 'src/app/common/components/share-on-social-media/share-on-social-media.component';
import { User } from 'src/app/common/models/user';
import { GlobalState } from 'src/app/state/types';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  isInBookmarks$ = this.store.select(allBookmarkIds).pipe(
    map((ids: number[]) => ids.includes(this.article.id)),
  );
  article: ArticleModel;
  errorMessage: string;
  loading = false;

  get author() {
    return (this.article || {} as ArticleModel).author as User;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly articleService: ArticleService,
    private readonly store: Store<GlobalState>,
    private readonly bottomSheet: MatBottomSheet,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.loadArticle();
  }

  addToBookmarks() {
    this.store.dispatch(addToBookmarks({article: this.article}));
  }

  removeFromBookmarks() {
    this.store.dispatch(removeFromBookmarks({id: this.article.id}));
  }

  shareOnSocialMedia() {
    this.bottomSheet.open(ShareOnSocialMediaComponent, {data: {article: this.article}});
  }

  back() {
    this.location.back();
  }

  async loadArticle() {
    this.loading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    try {
      this.article = await this.articleService.getArticle(id);
      this.title.setTitle(this.article.title);
    } catch (error) {
      this.errorMessage = `Տեղի է ունեցել սխալ, խնդրում ենք փորձել մի փոքր ուշ`;
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

}
