import Link from 'next/link';
import { FC, useState } from 'react';
import { Routes } from '../../../enums';
import { LatestModulesTab } from './LatestModulesTab';
import { PopularModulesTab } from './PopularModulesTab';
import styles from './styles.module.scss';
import { TopRatedModulesTab } from './TopRatedModulesTab';

type TabsType = 'top_rated' | 'latest' | 'popular';
export const EducacionalModule: FC = () => {
  const [currentTab, setCurrentTab] = useState<TabsType>('popular');

  const tabsModules = {
    top_rated: <TopRatedModulesTab />,
    latest: <LatestModulesTab />,
    popular: <PopularModulesTab />,
  };

  const handleChangeTab = (tab: TabsType) => {
    setCurrentTab(tab);
  };

  const styleIfCurrentTab = (tab: TabsType) => {
    const currentTabStyle =
      'after:content-[""] after:h-[3px] after:w-full after:bg-[#707070] after:block after:bottom-0 after:rounded-2xl after:mt-3';

    if (tab === currentTab) return currentTabStyle;
    return '';
  };

  return (
    <section className='w-full mt-16 px-4'>
      <div className='max-w-[1100px] mx-auto'>
        <h2 className='text-center text-primary font-semibold text-3xl mb-8'>
          Módulos Educacionais
        </h2>

        <ul
          className={`flex text-lg font-semibold whitespace-nowrap scrollbar-hide  ${styles.nav}`}
        >
          <li className={`mr-8 ${styleIfCurrentTab('popular')}`}>
            <button type='button' onClick={() => handleChangeTab('popular')}>
              Mais populares
            </button>
          </li>
          <li className={`mr-8 ${styleIfCurrentTab('top_rated')}`}>
            <button type='button' onClick={() => handleChangeTab('top_rated')}>
              Mais bem avaliados
            </button>
          </li>
          <li className={`${styleIfCurrentTab('latest')}`}>
            <button type='button' onClick={() => handleChangeTab('latest')}>
              Mais recentes
            </button>
          </li>
        </ul>

        <>{tabsModules[currentTab]}</>
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
