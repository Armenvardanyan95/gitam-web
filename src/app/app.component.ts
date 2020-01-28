import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appLoaded } from './state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gitam-web';

  constructor(
    private readonly store: Store<any>,
  ) {}

  ngOnInit() {
    this.store.dispatch(appLoaded());
  }
}
