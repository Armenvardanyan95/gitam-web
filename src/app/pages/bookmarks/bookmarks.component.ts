import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { allBookmarks } from 'src/app/state/selectors';
import { GlobalState } from 'src/app/state/types';



@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  bookmarks$ = this.store.select(allBookmarks);
  // errorMessage: string;
  // loading = false;

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('Պահպանված հոդվածներ');
  }

}
