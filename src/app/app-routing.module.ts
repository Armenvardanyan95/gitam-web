import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { SearchComponent } from './pages/search/search.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const loadAdmin = () => import('./admin/admin.module').then(m => m.AdminModule);
const loadLogin = () => import('./pages/login/login.module').then(m => m.LoginModule);

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', loadChildren: loadLogin },
  { path: 'admin', loadChildren: loadAdmin },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'tags/:name', component: TagDetailComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
