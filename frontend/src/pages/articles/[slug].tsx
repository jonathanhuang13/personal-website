import { GetStaticPaths, GetStaticProps } from 'next';

import { Article, getArticle, getArticleSlugs, getGlobalData, GlobalData } from '../../lib/api';

import SEO from '../../components/seo';

interface Props {
  article: Article;
  globalData: GlobalData;
}

export default function ({ article, globalData }: Props): JSX.Element {
  const { seo } = article;

  return (
    <>
      <SEO
        title={seo.metaTitle}
        description={seo.metaDescription}
        faviconURL={globalData.favicon.data.attributes.url}
        keywords={seo.keywords}
        preventIndexing={seo.preventIndexing}
      />

      <div>
        <h1>{article.title}</h1>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articleSlugs = await getArticleSlugs();
  return {
    paths: articleSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [article, globalData] = await Promise.all([getArticle(params?.slug as string), getGlobalData()]);

  return {
    props: { article: article.data.attributes, globalData: globalData.data.attributes },
    revalidate: 10,
  };
};
