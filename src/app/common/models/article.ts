import { User } from './user';

export class ArticleModel {
  constructor(
    public title: string,
    public text: string,
    public tags: string,
    public author: number | User,
    public id?: number,
    public image?: string,
    public createdAt?: string,
  ) {}
}
