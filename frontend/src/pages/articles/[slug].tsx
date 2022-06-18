import { GetStaticPaths, GetStaticProps } from 'next';

import { Article, getArticle, getArticleSlugs } from '../../lib/api';

import SEO from '../../components/seo';

interface Props {
  article: Article;
}

const ArticlePage = ({ article }: Props): JSX.Element => {
  const { seo } = article;
  return (
    <>
      <SEO
        title={seo.metaTitle}
        description={seo.metaDescription}
        keywords={seo.keywords}
        preventIndexing={seo.preventIndexing}
      />

      <div>
        <h1>{article.title}</h1>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleSlugs = await getArticleSlugs();
  return {
    paths: articleSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticle(params?.slug as string);
  return { props: { article: article.data.attributes }, revalidate: 10 };
};

export default ArticlePage;
