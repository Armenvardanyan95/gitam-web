import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, PageEvent, MatDialog } from '@angular/material';
import { filter, pluck, takeUntil, debounceTime, tap } from 'rxjs/operators';

import { ArticleService } from 'src/app/common/services/article.service';
import { ArticleModel } from 'src/app/common/models/article';
import { List } from 'src/app/common/models/list';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete-article',
  template: `
    <div mat-dialog-container>
      <div mat-dialog-content>
        Հեռացնե՞լ
      </div>
      <div>
        <button mat-raised-button (click)="delete()">Հեռացնել</button>
        <button mat-raised-button (click)="cancel()">Չեղարկել</button>
      </div>
    </div>
  `,
})
export class DeleteArticleComponent {

  constructor(
    private readonly articleService: ArticleService,
    private readonly dialogRef: MatDialogRef<DeleteArticleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: ArticleModel,
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  async delete() {
    try {
      await this.articleService.deleteArticle(this.data.id);
      this.dialogRef.close({done: true, error: null});
    } catch (error) {
      this.dialogRef.close({done: true, error});
    }
  }

}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  articleList: List<ArticleModel> = List.empty();
  displayedColumns: string[] = ['title', 'createdAt', 'author', 'actions'];
  loading = false;
  pageInfo: PageEvent = null;
  searchControl = new FormControl('');
  destroy$ = new Subject<void>();

  constructor(
    private readonly articleService: ArticleService,
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getArticles();

    this.searchControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(400),
      tap(query => this.search(query)),
    ).subscribe();
  }

  changePage(pageInfo: PageEvent = this.pageInfo) {
    this.pageInfo = pageInfo;
    this.getArticles(pageInfo.pageIndex + 1, pageInfo.pageSize);
  }

  async getArticles(page = 1, perPage = 10) {
    this.loading = true;
    try {
      this.articleList = await this.articleService.getArticles(page, perPage, this.searchControl.value);
    } catch (error) {
      // TODO: handle error
    } finally {
      this.loading = false;
    }
  }

  async search(query) {
    this.loading = true;
    try {
      this.articleList = await this.articleService.getArticles(1, (this.pageInfo || {pageSize: 10}).pageSize, query);
    } catch (error) {
      // TODO: handle error
    } finally {
      this.loading = false;
    }
  }

  delete(article: ArticleModel) {
    const dialogRef = this.dialog.open(DeleteArticleComponent, {data: article});

    dialogRef.afterClosed().pipe(
      filter(result => result.done),
      pluck('error'),
    ).subscribe(error => {
      if (error) {
        // TODO: handle error
      } else {
        this.getArticles();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
