import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from './services/article.service';
import { Environment } from './models/environment';
import { environment } from 'src/environments/environment';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TagsComponent } from './components/tags/tags.component';
import { SplitPipe } from './pipes/split.pipe';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FurtherReadingComponent } from './components/further-reading/further-reading.component';
import { RandomItemPipe } from './pipes/random-item.pipe';
import { ShareOnSocialMediaComponent } from './components/share-on-social-media/share-on-social-media.component';
import { ArticleSkeletonsComponent } from './components/article-skeletons/article-skeletons.component';



@NgModule({
  declarations: [InfiniteScrollComponent, ArticleItemComponent, TagsComponent, SplitPipe, ArticleListComponent, CapitalizeFirstPipe, HeaderComponent, FurtherReadingComponent, RandomItemPipe, ShareOnSocialMediaComponent, ArticleSkeletonsComponent],
  exports: [InfiniteScrollComponent, ArticleListComponent, TagsComponent, SplitPipe, CapitalizeFirstPipe, HeaderComponent, FurtherReadingComponent, RandomItemPipe, ShareOnSocialMediaComponent, MatBottomSheetModule, ArticleSkeletonsComponent],
  imports: [
    NgCommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([]),
  ],
  entryComponents: [ShareOnSocialMediaComponent],
  providers: [
    ArticleService,
    { provide: Environment, useValue: environment },
  ],
})
export class CommonModule { }
