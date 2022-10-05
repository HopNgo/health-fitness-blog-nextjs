export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  title: string;
  publishedDate: string;
  tagList: string[];
  description: string;
  slug: string;
  author?: Author;
  htmlContent?: string;
}
