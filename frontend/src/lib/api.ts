import { fetchStrapi, StrapiEntryResponse } from '../external/strapi';

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  preventIndexing: boolean;
}

interface Image {
  name: string;
  alternativeText: string;
  mime: string;
  url: string;
}

type StrapiImage = StrapiEntryResponse<Image>;

export interface GlobalData {
  favicon: StrapiImage;
  seo: SEO;
}

export async function getGlobalData(): Promise<StrapiEntryResponse<GlobalData>> {
  const response = await fetchStrapi<GlobalData>('/global', { populate: '*' });
  return response;
}

// Articles

export interface Article {
  title: string;
  slug: string;
  content: string;
  publishedAt: string;
  seo: SEO;
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
