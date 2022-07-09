import { GetStaticProps } from 'next';

import { getGlobalData, GlobalData } from '../lib/api';

import Layout from '../components/layout';

interface Props {
  globalData: GlobalData;
}

export default function ConfirmedSubscription(props: Props): JSX.Element {
  const { seo } = props.globalData;

  return (
    <Layout
      title={seo.metaTitle}
      description={seo.metaDescription}
      faviconURL={props.globalData.favicon.data.attributes.url}
      keywords={seo.keywords}
      preventIndexing={seo.preventIndexing}
    >
      <main className="flex flex-col items-center justify-center h-80 md:h-96">
        <h1>Subscription confirmed!</h1>
        <p className="text-center">
          Boom! You're officially confirmed and on the list. Expect some great emails headed your way very
          soon.
        </p>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const globalData = await getGlobalData();
  return { props: { globalData: globalData.data.attributes }, revalidate: 10 };
};
