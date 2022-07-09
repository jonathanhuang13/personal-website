import { GetStaticProps } from 'next';

import { getGlobalData, GlobalData } from '../lib/api';

import Layout from '../components/layout';
import { getStrapiMedia } from '../external/strapi';

interface Props {
  globalData: GlobalData;
}

export default function ConfirmedSubscription(props: Props): JSX.Element {
  const { seo, socialShareImage } = props.globalData;

  return (
    <Layout
      title={seo.metaTitle}
      description={seo.metaDescription}
      keywords={seo.keywords}
      preventIndexing={seo.preventIndexing}
      socialShareImage={getStrapiMedia(socialShareImage.data.attributes.url)}
    >
      <main className="flex flex-col items-center justify-center h-80 md:h-96 max-w-prose mx-auto text-center">
        <h1>Subscription confirmed! 🙏</h1>
        <span className="text-center">
          You're officially on the list, thanks for joining. Just note that I only plan to write when I think
          there's something worth writing about so don't expect weekly emails.
        </span>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const globalData = await getGlobalData();
  return { props: { globalData: globalData.data.attributes }, revalidate: 10 };
};
