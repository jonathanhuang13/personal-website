import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head />
      <body className="dark:bg-slate-900 text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
