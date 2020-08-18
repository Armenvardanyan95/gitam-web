import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import * as decode from 'jwt-decode';

import { ArticleSaveModel } from 'src/app/common/models/article.save';
import { ArticleService } from 'src/app/common/services/article.service';
import { ArticleModel } from 'src/app/common/models/article';

@Component({
  selector: 'app-add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.scss']
})
export class AddEditArticleComponent implements OnInit {

  form = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required],
    tags: [[], Validators.required],
    image: [''],
  });
  editedArticle: ArticleModel =  null;
  loading = false;
  uploadLoading = false;
  file: File = null;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private readonly fb: FormBuilder,
    private readonly articleService: ArticleService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadSingleArticle(id);
    }
  }

  async uploadFile(file: File) {
    this.uploadLoading = true;
    try {
      const signed = await this.articleService.signFileAWS(file);
      await this.articleService.uploadFile(file, signed.signedRequest);
      this.form.get('image').setValue(signed.url);
      this.editedArticle.image = signed.url;
    } catch (error) {
      console.error(error);
    } finally {
      this.uploadLoading = false;
    }
  }

  async save(createAnother = false) {
    const { value, valid } = this.form;
    if (valid) {
      const { id } = decode(localStorage.getItem('token'));
      const article = new ArticleSaveModel(value.title, value.text, (value.tags as string[]).join(','), id);
      article.image = value.image;

      try {
        this.loading = true;
        if (this.editedArticle) {
          await this.updateArticle(article);
        } else {
          await this.createArticle(article, createAnother);
        }
      } catch (error) {
        console.log(error);
        // TODO: handle error
      } finally {
        this.loading = false;
      }
    }
  }

  private async updateArticle(article: ArticleSaveModel) {
    await this.articleService.updateArticle(article, this.editedArticle.id);
    await this.router.navigateByUrl('/admin/article-list');
  }

  private async createArticle(article: ArticleSaveModel, createAnother: boolean) {
    const { id } = await this.articleService.createArticle(article);
    if (this.file) {
      await this.articleService.uploadImage(this.file, id);
    }
    if (createAnother) {
      this.form.reset({
        title: '',
        tags: [],
        text: '',
      });
      // TODO: show success notification
    } else {
      await this.router.navigateByUrl('/admin/article-list');
    }
  }

  removeFromTags(tagToRemove: string) {
    const control = this.form.get('tags');
    let tags = control.value as string[];
    tags = tags.filter(tag => tag !== tagToRemove);
    control.setValue(tags);
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      const control = this.form.get('tags');
      const tags = control.value as string[];
      control.setValue([...tags, value.trim()]);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  private async loadSingleArticle(id: number) {
    try {
      this.editedArticle = await this.articleService.getArticle(id).toPromise();
      this.form.get('title').setValue(this.editedArticle.title);
      this.form.get('text').setValue(this.editedArticle.text);
      this.form.get('tags').setValue(this.editedArticle.tags.split(','));
    } catch (error) {
      console.error(error);
      // TODO: handle error
    }
  }

}
