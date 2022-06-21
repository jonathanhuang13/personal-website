import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        {/* Only count on production */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if (window.location.host !== 'jonathanlhuang.com') window.goatcounter = {no_onload: true}`,
          }}
        />
        <script
          data-goatcounter="https://jonathanhuang.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
      </Head>
      <body className="dark:bg-slate-900 text-black mx-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
