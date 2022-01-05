export interface Post {
  bannerImage?: string;
  content: string;
  date: Date;
  description?: string;
  image?: string;
  imageList?: Array<string>;
  tags?: Array<string>;
  title: string;
  slug: string;
}
