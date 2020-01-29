import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatTooltipModule, MatIconModule, MatBottomSheetModule, MatCardTitle, MatCardSubtitle, MatIcon } from '@angular/material';
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

fdescribe('ArticleItemComponent', () => {
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
    const iconEl = bookmarkButtonEl.query(By.directive(MatIcon));
    expect(iconEl.nativeElement.textContent).toContain('bookmark_border');
    mockBookmarksSelector.setResult([1]);
    mockStore.refreshState();
    fixture.detectChanges();
  });
});
