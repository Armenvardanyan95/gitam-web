import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-skeletons',
  templateUrl: './article-skeletons.component.html',
  styleUrls: ['./article-skeletons.component.scss']
})
export class ArticleSkeletonsComponent implements OnInit {

  range = new Array(10).fill(0);

  constructor() { }

  ngOnInit() {
  }

}
