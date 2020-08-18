import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import hy from '@angular/common/locales/hy';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './common/services/token.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from './common/common.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { SearchComponent } from './pages/search/search.component';
import { authReducer, bookmarksReducer, articlesReducer, finishLoadingReducer,
         searchResultsReducer, articlesByTagReducer, preferencesReducer, navigationReducer, tagsReducer } from './state/reducers';
import { BookmarksEffects, ArticlesEffects, AppEffects, MessagesEffects, AuthEffects } from 'src/app/state/effects';
import { RegistrationComponent } from './pages/registration/registration.component';
import { Environment } from './common/models/environment';
import { TagsEffects } from './state/tags/tags.effects';

registerLocaleData(hy);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleDetailComponent,
    TagDetailComponent,
    BookmarksComponent,
    SearchComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CommonModule,
    StoreModule.forRoot({
      isAuth: authReducer,
      bookmarks: bookmarksReducer,
      articles: articlesReducer,
      tags: tagsReducer,
      finishLoading: finishLoadingReducer,
      searchResults: searchResultsReducer,
      articlesByTag: articlesByTagReducer,
      preferences: preferencesReducer,
      navigation: navigationReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([
      AppEffects,
      AuthEffects,
      BookmarksEffects,
      ArticlesEffects,
      TagsEffects,
      MessagesEffects,
    ]),
    StoreRouterConnectingModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'hy' },
    { provide: Environment, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
