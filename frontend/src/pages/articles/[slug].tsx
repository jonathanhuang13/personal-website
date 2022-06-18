import { GetStaticPaths, GetStaticProps } from 'next';
import { Article, getArticle, getArticleSlugs } from '../../lib/api';

interface Props {
  article: Article;
}

const ArticlePage = ({ article }: Props): JSX.Element => {
  return (
    <div>
      <h1>{article.title}</h1>
    </div>
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
