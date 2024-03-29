import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { ArticleModel } from '../../models/article';
import { Subject } from 'rxjs';
import { GlobalState } from 'src/app/state/types';

enum SocialMedia {
  Twitter,
  Facebook,
  VK,
  Other,
}

@Component({
  selector: 'app-share-on-social-media',
  templateUrl: './share-on-social-media.component.html',
  styleUrls: ['./share-on-social-media.component.scss']
})
export class ShareOnSocialMediaComponent implements OnInit {

  isDarkMode$ = this.store.select(state => state.preferences.darkMode);
  platforms = SocialMedia;
  dismissed = new Subject<void>();
  copied = new Subject<void>();

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public readonly data: {article: ArticleModel},
    private readonly store: Store<GlobalState>,
  ) { }

  ngOnInit() {
  }

  shareOn(platform: SocialMedia) {
    let url;
    /* tslint:disable:max-line-length */
    const articleUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/articles/${this.data.article.id}`;
    /* tslint:enable:variable-name */
    switch (platform) {
      case SocialMedia.Twitter: {
        url = `https://twitter.com/intent/tweet?text=${ this.data.article.title }:%0A ${ articleUrl }`;
        break;
      }
      case SocialMedia.Facebook: {
        url = `https://www.facebook.com/sharer/sharer.php?u=${ articleUrl }`;
        break;
      }
      case SocialMedia.VK: {
        url = `https://vk.com/share.php?url=${ articleUrl }`;
        break;
      }
      default: {
        return this.copyToClipboard(articleUrl);
      }
    }

    window.open(url, 'newwindow', 'width=500px&height=200px');
  }

  private copyToClipboard(url: string) {
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.dismissed.next();
    this.dismissed.complete();
    this.copied.next();
    this.copied.complete();
  }

}
