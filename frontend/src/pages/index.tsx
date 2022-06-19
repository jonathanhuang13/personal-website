import { GetStaticProps } from 'next';

import { getGlobalData, GlobalData } from '../lib/api';

import Layout from '../components/layout';

interface Props {
  globalData: GlobalData;
}

export default function Home(props: Props): JSX.Element {
  const { seo } = props.globalData;

  return (
    <Layout
      title={seo.metaTitle}
      description={seo.metaDescription}
      faviconURL={props.globalData.favicon.data.attributes.url}
      keywords={seo.keywords}
      preventIndexing={seo.preventIndexing}
    >
      <div className="flex flex-col items-center justify-center h-96">
        <span className="text-6xl font-semibold mb-6">👋 Hi, I'm Jonathan</span>
        <span className="text-2xl">
          ...founding engineer at Maven, interested in education, architecture, and programming.
        </span>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const globalData = await getGlobalData();
  return { props: { globalData: globalData.data.attributes }, revalidate: 10 };
};
