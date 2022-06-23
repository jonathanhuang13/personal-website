import { useState } from 'react';
import { GetStaticProps } from 'next';
import { Typewriter, Cursor } from 'react-simple-typewriter';

import { getGlobalData, GlobalData } from '../lib/api';

import Layout from '../components/layout';

interface Props {
  globalData: GlobalData;
}

export default function Home(props: Props): JSX.Element {
  const { seo } = props.globalData;

  const [typewriterDone, setTypewriterDone] = useState(false);

  return (
    <Layout
      title={seo.metaTitle}
      description={seo.metaDescription}
      faviconURL={props.globalData.favicon.data.attributes.url}
      keywords={seo.keywords}
      preventIndexing={seo.preventIndexing}
    >
      <div className="flex flex-col items-center justify-center h-80 md:h-96 dark:text-gray-100">
        <span className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6">
          👋 Hi, I'm{' '}
          <span className="inline-block text-slate-400 w-40 md:w-64">
            <Typewriter
              words={['', 'Jonathan']}
              delaySpeed={500}
              typeSpeed={90}
              onLoopDone={() => setTypewriterDone(true)}
            />
            {typewriterDone ? <Cursor /> : '|'}
          </span>
        </span>
        <span className="text-lg md:text-2xl max-w-prose text-center">
          I'm a founding engineer at{' '}
          <a className="text-sky-500" href="https://maven.com" target="_blank">
            Maven
          </a>
          , and I'm interested in education 📚, architecture 🏠, and programming 🧑‍💻.
        </span>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const globalData = await getGlobalData();
  return { props: { globalData: globalData.data.attributes }, revalidate: 10 };
};
