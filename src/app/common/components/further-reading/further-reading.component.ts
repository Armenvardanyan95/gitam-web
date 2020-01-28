import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ArticleService } from '../../services/article.service';
import { ArticleModel } from '../../models/article';

@Component({
  selector: 'app-further-reading',
  templateUrl: './further-reading.component.html',
  styleUrls: ['./further-reading.component.scss']
})
export class FurtherReadingComponent implements OnInit, OnChanges {
  @Input() tag: string;
  @Input() currentArticleId: number;
  articles: ArticleModel[] = [];

  constructor(
    private readonly articleService: ArticleService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadArticles();
  }

  async loadArticles() {
    const list = await this.articleService.getFeed(1, {size: 2, tag: this.tag}).toPromise();
    this.articles = list.data.filter(article => this.currentArticleId !== article.id);
  }

}
