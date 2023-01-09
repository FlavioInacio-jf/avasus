import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../types';
import { RootLayout } from '../layout';
import { Head } from './head';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head />
      <div className='w-full'>Contato</div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
