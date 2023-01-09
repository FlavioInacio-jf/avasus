import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { NextPageWithLayout } from '../types';
import { RootLayout } from './layout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});
export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name='theme-color' content='#3dbee8' />
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=5'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <main className={`${montserrat.variable}  ${montserrat.className}`}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
};

export default App;
