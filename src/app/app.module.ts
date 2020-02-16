import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './common/services/token.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from './common/common.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { SearchComponent } from './pages/search/search.component';
import { authReducer, bookmarksReducer, articlesReducer, finishLoadingReducer,
         searchResultsReducer, articlesByTagReducer } from './state/reducers';
import { BookmarksEffects, ArticlesEffects, AppEffects, MessagesEffects, AuthEffects } from 'src/app/state/effects';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    MatProgressSpinnerModule,
    CommonModule,
    StoreModule.forRoot({
      isAuth: authReducer,
      bookmarks: bookmarksReducer,
      articles: articlesReducer,
      finishLoading: finishLoadingReducer,
      searchResults: searchResultsReducer,
      articlesByTag: articlesByTagReducer,
    }),
    EffectsModule.forRoot([AppEffects, AuthEffects, BookmarksEffects, ArticlesEffects, MessagesEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
