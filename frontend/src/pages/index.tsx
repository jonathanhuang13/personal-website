import { GetStaticProps } from 'next';

import { getGlobalData, GlobalData } from '../lib/api';

import SEO from '../components/seo';

interface Props {
  globalData: GlobalData;
}

export default function Home(props: Props): JSX.Element {
  const { seo } = props.globalData;

  return (
    <>
      <SEO
        title={seo.metaTitle}
        description={seo.metaDescription}
        faviconURL={props.globalData.favicon.data.attributes.url}
        keywords={seo.keywords}
        preventIndexing={seo.preventIndexing}
      />

      <div className="flex flex-col justify-center h-screen"></div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const globalData = await getGlobalData();
  return { props: { globalData: globalData.data.attributes }, revalidate: 10 };
};
