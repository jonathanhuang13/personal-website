import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import getReadingTime, { ReadTimeResults } from 'reading-time';

import { SEO as SEOMeta, getArticle, getArticleSlugs, getGlobalData, GlobalData } from '../../lib/api';

import TestMdx from '../../components/mdx/test-mdx';
import Layout from '../../components/layout';
import Subscribe from '../../components/subscribe';
import { getStrapiMedia } from '../../external/strapi';

const components = { TestMdx };

interface Props {
  title: string;
  mdxContent: MDXRemoteSerializeResult;
  seoMeta: SEOMeta;
  globalData: GlobalData;
  readingTime: ReadTimeResults;
}

export default function ({ title, mdxContent, seoMeta, globalData, readingTime }: Props): JSX.Element {
  const { socialShareImage } = globalData;

  return (
    <Layout
      title={seoMeta.metaTitle}
      description={seoMeta.metaDescription}
      keywords={seoMeta.keywords}
      preventIndexing={seoMeta.preventIndexing}
      socialShareImage={getStrapiMedia(socialShareImage.data.attributes.url)}
    >
      <article className="mb-20">
        <div className="text-center">
          <div className="text-5xl font-bold mb-4">{title}</div>
          <div className="italic">{readingTime.text}</div>
        </div>
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

  const readingTime = getReadingTime(content);
  const mdxContent = await serialize(content, { mdxOptions: { remarkPlugins: [remarkGfm] } });

  return {
    props: { title, mdxContent, seoMeta: seo, globalData: globalData.data.attributes, readingTime },
    revalidate: 10,
  };
};
