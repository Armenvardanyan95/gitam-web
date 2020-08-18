import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { GlobalState } from 'src/app/state/types';
import { loadAllTags, selectTag, deselectTag, deselectAllTags } from 'src/app/state/tags/tags.actions';

@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.scss']
})
export class AllTagsComponent implements OnInit {

  allTags$ = this.store.select(state => state.tags.allTags);
  selectedTags$ = this.store.select(state => state.tags.selectedTags);

  constructor(
    private readonly store: Store<GlobalState>,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.store.dispatch(loadAllTags());
  }

  selectTag(tag: string) {
    this.store.dispatch(selectTag({payload: tag}));
  }

  deselectTag(tag: string) {
    this.store.dispatch(deselectTag({payload: tag}));
  }

  deselectAllTags() {
    this.store.dispatch(deselectAllTags());
  }

  goToTagDetails(tag: string) {
    this.router.navigateByUrl(`/tags${tag}`);
  }

}
