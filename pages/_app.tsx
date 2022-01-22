import type { AppProps } from 'next/app';
import React from 'react';
import { setup } from 'goober';

setup(React.createElement);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
