import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../types';
import { RootLayout } from '../layout';
import { BreadCrumbs } from '../layout/BreadCrumbs';
import { Head } from './head';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head />
      <div>Sobre nós</div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <BreadCrumbs>{page}</BreadCrumbs>
    </RootLayout>
  );
};

export default Page;
