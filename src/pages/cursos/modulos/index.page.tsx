import { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { Tabs } from '../../../components';
import { TabPanel } from '../../../components/Tabs/TabPanel';
import { CourseQueryKeys } from '../../../enums';
import { queryClientService } from '../../../services';
import { NextPageWithLayout } from '../../../types';
import { Head } from './head';
import { CourseModule } from './Module';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head />
      <div className='w-full px-4'>
        <div className='w-full max-w-[1110px] mx-auto my-8'>
          <div className='text-[#808080] xss:text-sm xs:text-sm'>
            Início / Cursos /
            <span className='font-semibold text-black'> Módulos </span>
          </div>
        </div>
      </div>
      <section className='w-full px-4 mb-48'>
        <div className='max-w-[1110px] mx-auto'>
          <h2 className='title title-primary title-4xl text-center mb-8 xss:mb-4 xs:mb-4'>
            Módulos Educacionais
          </h2>
          <Tabs>
            <TabPanel title='Covid 19'>
              <CourseModule
                queryKey={CourseQueryKeys.COVID}
                courseCategory='Covid 19'
              />
            </TabPanel>
            <TabPanel title='Sífilis e outras Ist’s'>
              <CourseModule
                queryKey={CourseQueryKeys.SIFILIS}
                courseCategory='Síflis e outras ist'
              />
            </TabPanel>
            <TabPanel title='Preceptoria'>
              <CourseModule
                queryKey={CourseQueryKeys.PRECEPTORSHIP}
                courseCategory='Preceptoria'
              />
            </TabPanel>
            <TabPanel title='Doenças raras'>
              <CourseModule
                queryKey={CourseQueryKeys.RARE_DESEASES}
                courseCategory='Doenças raras'
              />
            </TabPanel>
            <TabPanel title='Web Palestras'>
              <CourseModule
                queryKey={CourseQueryKeys.WEBLECTURES}
                courseCategory='WebPalestras'
              />
            </TabPanel>
            <TabPanel title='Sistemas prisional'>
              <CourseModule
                queryKey={CourseQueryKeys.PRISON_SYSTEM}
                courseCategory='Sistema prisional'
              />
            </TabPanel>
            <TabPanel title='OPAS'>
              <CourseModule
                queryKey={CourseQueryKeys.OPAS}
                courseCategory='OPAS'
              />
            </TabPanel>
          </Tabs>
        </div>
      </section>
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
