import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  shareImage?: string;
  keywords: string;
  preventIndexing: boolean;
}

const SEO = (props: Props): JSX.Element => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} key="description" />
      <meta name="keywords" content="{keywords}" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta property="og:title" content={props.title} key="og:title" />
      <meta property="og:description" content={props.description} key="og:description" />
      <meta property="og:image" content={props.shareImage} key="og:image" />

      {props.preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
        </>
      )}
    </Head>
  );
};

export default SEO;
