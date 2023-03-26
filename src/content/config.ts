import { z, defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

// keys should match your collection directory name in "src/content"
export const collections = {
  articles: articlesCollection,
};
