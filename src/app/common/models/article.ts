import { User } from './user';

export class ArticleModel {
  id?: number;
  title: string;
  text: string;
  tags: string;
  author: number | User;
  image?: string;
  createdAt?: string;
}
