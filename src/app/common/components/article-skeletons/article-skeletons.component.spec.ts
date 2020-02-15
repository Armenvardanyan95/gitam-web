import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSkeletonsComponent } from './article-skeletons.component';

describe('ArticleSkeletonsComponent', () => {
  let component: ArticleSkeletonsComponent;
  let fixture: ComponentFixture<ArticleSkeletonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSkeletonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSkeletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
