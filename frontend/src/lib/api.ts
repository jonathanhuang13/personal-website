import { fetchStrapi, StrapiEntryResponse } from '../external/strapi';

export interface Article {
  title: string;
  slug: string;
  content: string;
  publishedAt: string;
  seo: SEO;
}

interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  preventIndexing: boolean;
}

export async function getArticleSlugs(): Promise<string[]> {
  const response = await fetchStrapi<Article[]>('/articles');
  return response.data.map((article) => article.attributes.slug);
}

export async function getArticle(slug: string): Promise<StrapiEntryResponse<Article>> {
  const response = await fetchStrapi<Article[]>(`/articles`, {
    filters: { slug: { $eq: slug } },
    populate: '*',
  });

  return { ...response, data: response.data[0] };
}
