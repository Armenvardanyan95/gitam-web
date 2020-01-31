import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appLoaded } from './state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly store: Store<any>,
  ) {}

  ngOnInit() {
    this.store.dispatch(appLoaded());
  }

  get hasScroll() {
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height > window.innerHeight;
  }

  scrollUp() {
    const isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1;
    const originalTop = -1200;
    const checkIfDone = setInterval(() => {
        isIE ? window.scroll(0, window.pageYOffset + originalTop) : window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const atTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) === 0;
        if (atTop) {
            clearInterval(checkIfDone);
        }
    }, 300);
  }
}
