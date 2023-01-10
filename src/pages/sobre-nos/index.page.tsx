import { ReactElement } from 'react';
import { NextPageWithLayout } from '../../types';
import { RootLayout } from '../layout';
import { BreadCrumbs } from '../layout/BreadCrumbs';
import { Head } from './head';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head />

      <div className='w-full mb-[196px] xss:mb-16 xs:mb-28 sm:mb-28 md:mb-28'>
        <section className='w-full px-4 mt-8'>
          <div className='max-w-[1110px] mx-auto'>
            <h2 className='title title-4xl title-primary text-center mb-8'>
              Sobre Nós
            </h2>
          </div>
        </section>
      </div>
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
