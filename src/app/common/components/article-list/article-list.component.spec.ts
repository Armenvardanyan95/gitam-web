import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import { MockComponent } from 'ng-mocks';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { By } from '@angular/platform-browser';
import { ArticleModel } from '../../models/article';

fdescribe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  const fixedDate = new Date().toISOString();
  const mockArticle = new ArticleModel('Title', 'Text', 'math,science',
  {email: 'A@.test.com', fullName: 'Test user'}, 1, 'image', fixedDate);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListComponent, MockComponent(InfiniteScrollComponent), MockComponent(ArticleItemComponent) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an infinite scroll component', () => {
    const infiniteScrollComponentEl = fixture.debugElement.query(By.directive(InfiniteScrollComponent));
    expect(infiniteScrollComponentEl).toBeTruthy();
    const loadMoreEmitSpy = spyOn(component.loadMore, 'emit');
    infiniteScrollComponentEl.triggerEventHandler('scrolled', void 0);
    expect(loadMoreEmitSpy).toHaveBeenCalled();
  });

  it('should render articles', () => {
    let articleEls = fixture.debugElement.queryAll(By.css('app-article-item'));
    expect(articleEls.length).toBe(0);
    component.articles = [{...mockArticle}, {...mockArticle}];
    fixture.detectChanges();
    articleEls = fixture.debugElement.query(By.css('app-infinite-scroll')).queryAll(By.css('app-article-item'));
    expect(articleEls.length).toBe(2);
  });
});
