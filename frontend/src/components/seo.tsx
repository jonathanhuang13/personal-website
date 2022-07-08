import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  faviconURL: string;
  shareImage?: string;
  keywords: string;
  preventIndexing: boolean;
}

export default function SEO(props: Props): JSX.Element {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="shortcut icon" href={'/images/logo.svg'} />
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
}
