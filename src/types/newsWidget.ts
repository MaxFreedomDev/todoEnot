export interface IArticle {
  id: string | null;
  name: string;
  title: string;
  url: string;
  urlToImage: string;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
}

export interface INews {
  articles: IArticle[];
}
