import { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClientService } from '../services';
import { NextPageWithLayout } from '../types';
import { BannerHome } from './home/BannerHome';
import { contentsPartnersSection } from './home/contents-partners-section';
import { EducacionalModule } from './home/EducationalModule';
import { Head } from './home/head';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head />
      <div className='w-full'>
        <BannerHome />
        <EducacionalModule />
        <section className='w-full px-4 mt-24 mb-32 xss:mb-16 xs:mb-16 sm:mb-16 md:mb-16'>
          <div className='w-full max-w-[1110px] mx-auto'>
            <h2 className='title title-3xl title-primary text-center mb-8'>
              Parceiros
            </h2>
            <div className='w-full bg-[#F5F5F7] py-7 px-8 rounded-[20px]'>
              <ul className='flex gap-8 xss:flex-col xs:flex-col sm:flex-col md:flex-col'>
                {contentsPartnersSection.map(({ title, detail }) => (
                  <li key={title} className='flex-1'>
                    <h3 className='title title-2xl title-black mb-[1.125rem] leading-none text-center'>
                      {title}
                    </h3>
                    <p className='font-semibold xss:text-base xs:text-base text-lg text-[#707070] text-center leading-tight'>
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <QueryClientProvider client={queryClientService}>
      {page}
    </QueryClientProvider>
  );
};

export default Page;
