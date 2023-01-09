import { NextPage } from 'next';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../types';
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
  return <BreadCrumbs>{page} </BreadCrumbs>;
};

export default Page;
