import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { GlobalState } from 'src/app/state/types';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() tags: string;
  @Input() limit = Infinity;
  isDarkMode$ = this.store.select(state => state.preferences.darkMode);

  constructor(
    private readonly store: Store<GlobalState>,
  ) {}

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

}
