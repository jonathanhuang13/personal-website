import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"jonathanhuang",utcoffset:"-7"}))};sessionStorage.setItem("_swa","1");</script>`,
          }}
        />
      </Head>
      <body className="dark:bg-slate-900 text-black mx-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
