import { Montserrat } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer, Header } from '../components';
import '../styles/globals.css';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});
export const App = ({ Component, pageProps }: AppProps) => {
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
      </Head>
      <div className={`${montserrat.variable}  ${montserrat.className}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default App;
