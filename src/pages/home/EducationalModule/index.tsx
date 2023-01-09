import Link from 'next/link';
import { FC } from 'react';
import { Tabs } from '../../../components';
import { TabPanel } from '../../../components/Tabs/TabPanel';
import { Routes } from '../../../enums';
import { LatestModulesTab } from './LatestModulesTab';
import { PopularModulesTab } from './PopularModulesTab';
import { TopRatedModulesTab } from './TopRatedModulesTab';

export const EducacionalModule: FC = () => {
  return (
    <section className='w-full mt-16 px-4'>
      <div className='max-w-[1100px] mx-auto'>
        <h2 className='text-center text-primary font-semibold text-3xl mb-8'>
          Módulos Educacionais
        </h2>
        <Tabs>
          <TabPanel title='Mais populares'>
            <PopularModulesTab />
          </TabPanel>
          <TabPanel title='Mais bem avaliados'>
            <TopRatedModulesTab />
          </TabPanel>
          <TabPanel title='Mais recentes'>
            <LatestModulesTab />
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
