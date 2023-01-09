import Link from 'next/link';
import { FC } from 'react';
import { Tabs } from '../../../components';
import { TabPanel } from '../../../components/Tabs/TabPanel';
import { CourseQueryKeys, Routes } from '../../../enums';
import { coursesService } from '../../../services';
import { Module } from './Module';

export const EducacionalModule: FC = () => {
  return (
    <section className='w-full mt-16 px-4'>
      <div className='max-w-[1100px] mx-auto'>
        <h2 className='text-center text-primary font-semibold text-3xl mb-8'>
          Módulos Educacionais
        </h2>
        <Tabs>
          <TabPanel title='Mais populares'>
            <Module
              queryKey={CourseQueryKeys.MOST_POPULAR_COURSES}
              fetch={() =>
                coursesService.all('_limit=3&_sort=matriculados&_order=desc')
              }
            />
          </TabPanel>
          <TabPanel title='Mais bem avaliados'>
            <Module
              queryKey={CourseQueryKeys.BEST_RATED}
              fetch={() =>
                coursesService.all('_limit=3&_sort=avaliacao&_order=desc')
              }
            />
          </TabPanel>
          <TabPanel title='Mais recentes'>
            <Module
              queryKey={CourseQueryKeys.LAST}
              fetch={() =>
                coursesService.all('_limit=3&_sort=criado_em&_order=desc')
              }
            />
          </TabPanel>
        </Tabs>

        <footer className='w-full flex justify-center mt-16'>
          <Link
            href={`/${Routes.COURSES}`}
            className='btn btn-secondary btn-xl'
            prefetch={false}
          >
            Ver mais
          </Link>
        </footer>
      </div>
    </section>
  );
};
