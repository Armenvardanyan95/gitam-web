import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatCardModule, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockComponent } from 'ng-mocks';

import { ArticleItemComponent } from './article-item.component';
import { TagsComponent } from '../tags/tags.component';
import { ArticleModel } from '../../models/article';
import { Bookmark, GlobalState } from 'src/app/state/types';
import { allBookmarkIds } from 'src/app/state/selectors';
import { DatePipe, CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { addToBookmarks } from 'src/app/state/actions';
import { ShareOnSocialMediaComponent } from '../share-on-social-media/share-on-social-media.component';

describe('ArticleItemComponent', () => {
  let component: ArticleItemComponent;
  let fixture: ComponentFixture<ArticleItemComponent>;
  let datePipe = new DatePipe('en');
  let mockStore: MockStore<GlobalState>;
  let mockBookmarksSelector: MemoizedSelector<number[] | string [], number[] | string []>;
  const fixedDate = new Date().toISOString();
  const mockArticle = new ArticleModel('Title', 'Text', 'math,science',
  {email: 'A@.test.com', fullName: 'Test user'}, 1, 'image', fixedDate);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatTooltipModule, MatIconModule, MatBottomSheetModule, RouterTestingModule ],
      declarations: [ ArticleItemComponent, MockComponent(TagsComponent) ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemComponent);
    component = fixture.componentInstance;
    component.article = mockArticle;
    mockStore = TestBed.get(Store);
    mockBookmarksSelector = mockStore.overrideSelector(allBookmarkIds, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill the Card Box with article data', () => {
    const titleEl = fixture.debugElement.query(By.directive(MatCardTitle));
    const subTitleEl = fixture.debugElement.query(By.directive(MatCardSubtitle));
    const imgEl = fixture.debugElement.query(By.css('img')) as ElementRef<HTMLImageElement>;
    expect(titleEl.nativeElement.textContent).toBe(mockArticle.title);
    expect(subTitleEl.nativeElement.textContent).toBe(datePipe.transform(mockArticle.createdAt));
    expect(imgEl.nativeElement.src).toContain(mockArticle.image);
  });

  it('should show not bookmarked before being added to bookmarks, then change when is bookmarked', () => {
    const bookmarkButtonEl = fixture.debugElement.query(By.css('button'));
    let iconEl = bookmarkButtonEl.query(By.directive(MatIcon));
    expect(iconEl.nativeElement.textContent).toContain('bookmark_border');
    mockBookmarksSelector.setResult([1]);
    mockStore.refreshState();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      iconEl = bookmarkButtonEl.query(By.directive(MatIcon));
      expect(iconEl.nativeElement.textContent).not.toContain('bookmark_border');
    });

  });

  it('should allow to bookmark and unbookmark the article', () => {
    const bookmarkButtonEl = fixture.debugElement.query(By.css('button'));
    let iconEl = bookmarkButtonEl.query(By.directive(MatIcon));
    const bookmarkSpy = spyOn(component, 'addToBookmarks').and.callThrough();
    const bookmarkActionSpy = spyOn(mockStore, 'dispatch');
    iconEl.triggerEventHandler('click', void 0);
    expect(bookmarkSpy).toHaveBeenCalled();
    expect(bookmarkActionSpy).toHaveBeenCalledWith(addToBookmarks({article: mockArticle}));
  });

  it('should allow social media sharing', () => {
    const {length, [length - 1]: shareButtonEl} = fixture.debugElement.queryAll(By.css('button'));
    const bottomSheet = TestBed.get(MatBottomSheet);
    const shareOnSocialMediaSpy = spyOn(component, 'shareOnSocialMedia').and.callThrough();
    const bottomSheetOpenSpy = spyOn(bottomSheet, 'open');
    shareButtonEl.triggerEventHandler('click', void 0);
    expect(shareOnSocialMediaSpy).toHaveBeenCalled();
    expect(bottomSheetOpenSpy).toHaveBeenCalledWith(ShareOnSocialMediaComponent, {data: {article: mockArticle}});
  });
});
