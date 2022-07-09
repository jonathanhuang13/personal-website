import { AppProps } from 'next/app';
import { useDarkMode } from 'usehooks-ts';

// Prevent icons from being so large
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/global.css';
import { Toaster } from 'react-hot-toast';
import { CSSProperties } from 'react';

const DARK_MODE_STYLES: CSSProperties | undefined = {
  backgroundColor: '#F1F5F9', // slate-200
  color: '#111827', // gray-900
};
const LIGHT_MODE_STYLES: CSSProperties | undefined = {
  backgroundColor: '#64748B', // slate-500
  color: '#F3F4F6', // gray-100
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Component {...pageProps} />
      <Toaster toastOptions={{ style: isDarkMode ? DARK_MODE_STYLES : LIGHT_MODE_STYLES }} />
    </>
  );
}
