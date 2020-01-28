import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOnSocialMediaComponent } from './share-on-social-media.component';

describe('ShareOnSocialMediaComponent', () => {
  let component: ShareOnSocialMediaComponent;
  let fixture: ComponentFixture<ShareOnSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareOnSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareOnSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
