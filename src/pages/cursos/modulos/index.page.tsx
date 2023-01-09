import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../../types';
import { Head } from './head';
import { ModuleLayout } from './layout';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head />
      <main className='w-full'></main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <ModuleLayout>{page}</ModuleLayout>;
};

export default Page;
