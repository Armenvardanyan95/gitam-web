import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AdminHomeComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'new-article', component: AddEditArticleComponent },
  { path: 'edit-article/:id', component: AddEditArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
