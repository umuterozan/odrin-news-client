export interface IPost {
  id: number;
  thumbnail: string;
  title: string;
  body: string;
  slug: string;
  createdAt: string;
  category: string;
  user: string;
  commentsCount: number;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  postsCount: number;
}

export interface ISession {
  id: number;
  agent: string;
  createdAt: string;
}