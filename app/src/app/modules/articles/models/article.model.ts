export class Article {
  constructor(
    public articleName: string,
    public articleCategory: string,
    public articleText: string
  ) {}

  public getDataForRequest() {
    return {
      name: this.articleName,
      category: this.articleCategory,
      article_text: this.articleText
    }
  }

  public updateUser(name = this.articleName,
                    category = this.articleCategory,
                    article_text = this.articleText): void {
    this.articleName = name;
    this.articleCategory = category;
    this.articleText = article_text;
  }
}

