export class List<T> {
  data: T[] = [];
  count = 0;
  total = 0;
  page = 0;
  pageCount = 0;

  static empty<T>(): List<T> {
    return new List<T>();
  }
}
