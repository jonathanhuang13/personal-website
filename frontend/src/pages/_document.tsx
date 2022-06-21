import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head></Head>
      <body className="dark:bg-slate-900 text-black mx-4">
        <Script
          data-goatcounter="https://jonathanhuang.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
