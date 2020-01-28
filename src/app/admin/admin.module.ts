import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule, MatDialogModule,
         MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { EditorModule } from 'primeng/editor';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';
import { ArticleListComponent, DeleteArticleComponent } from './article-list/article-list.component';
import { CommonModule } from '../common/common.module';
import { TokenInterceptor } from '../common/services/token.interceptor';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AddEditArticleComponent,
    ArticleListComponent,
    DeleteArticleComponent,
  ],
  entryComponents: [
    DeleteArticleComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  imports: [
    NgCommonModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    EditorModule,
  ]
})
export class AdminModule { }
