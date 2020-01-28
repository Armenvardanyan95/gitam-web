import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ArticleModel } from '../../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent  {

  @Input() articles: ArticleModel[] = [];
  @Input() finished = false;
  @Output() loadMore = new EventEmitter<void>();

}
