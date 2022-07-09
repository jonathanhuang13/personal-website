import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';

import { SEO as SEOMeta, getArticle, getArticleSlugs, getGlobalData, GlobalData } from '../../lib/api';

import TestMdx from '../../components/mdx/test-mdx';
import Layout from '../../components/layout';
import Subscribe from '../../components/subscribe';

const components = { TestMdx };

interface Props {
  title: string;
  mdxContent: MDXRemoteSerializeResult;
  seoMeta: SEOMeta;
  globalData: GlobalData;
}

export default function ({ title, mdxContent, seoMeta, globalData }: Props): JSX.Element {
  return (
    <Layout
      title={seoMeta.metaTitle}
      description={seoMeta.metaDescription}
      faviconURL={globalData.favicon.data.attributes.url}
      keywords={seoMeta.keywords}
      preventIndexing={seoMeta.preventIndexing}
    >
      <article className="mb-20">
        <h1 className="text-center">{title}</h1>
        <MDXRemote {...mdxContent} components={components}></MDXRemote>
      </article>

      <Subscribe />
    </Layout>
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
  const { title, content, seo } = article.data.attributes;

  const mdxContent = await serialize(content, { mdxOptions: { remarkPlugins: [remarkGfm] } });

  return {
    props: { title, mdxContent, seoMeta: seo, globalData: globalData.data.attributes },
    revalidate: 10,
  };
};
