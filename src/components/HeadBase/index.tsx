import Head from 'next/head';
import { FC, ReactNode } from 'react';

type HeadBaseProps = {
  children: ReactNode;
  ogImageUrl?: string;
};
export const HeadBase: FC<HeadBaseProps> = ({ ogImageUrl, children }) => {
  const siteURL = process.env.SITE_URL;
  return (
    <Head>
      <meta property='article:publisher' content='https://www.facebook.com/' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:domain' content={siteURL} />
      <meta
        name='description'
        content='Avasus: Laboratório de Inovação Tecnológica em Saúde.'
      />
      <meta name='robots' content='max-image-preview:large' />
      <link rel='canonical' href={siteURL} />
      <meta property='og:locale' content='pt_BR' />
      <meta
        property='og:site_name'
        content='Avasus - Conhecimento aberto em saúde'
      />
      <meta
        property='og:title'
        content='Avasus - Conhecimento aberto em saúde'
      />
      <meta
        property='og:description'
        content='LAIS: Laboratório de Inovação Tecnológica em Saúde.'
      />
      <meta property='og:url' content={siteURL} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:domain' content={siteURL} />
      <meta
        name='twitter:title'
        content='Avasus - Conhecimento aberto em saúde'
      />
      <meta
        name='twitter:description'
        content='LAIS: Laboratório de Inovação Tecnológica em Saúde.'
      />
      <meta
        property='og:image'
        content={ogImageUrl || `${siteURL}/banners/banner-home.png`}
      />
      {children}
    </Head>
  );
};
