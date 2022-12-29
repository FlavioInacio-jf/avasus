import { FC, useState } from 'react';
import { LatestModulesTab } from './LatestModulesTab';
import { PopularModulesTab } from './PopularModulesTab';
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
  return (
    <section className='w-full mt-16 px-4'>
      <div className='max-w-[1100px] mx-auto'>
        <h2 className='text-center text-primary font-semibold text-3xl mb-8'>
          Módulos Educacionais
        </h2>

        <div>
          <ul className='flex text-lg font-semibold '>
            <li className='mr-8'>
              <button type='button' onClick={() => handleChangeTab('popular')}>
                Mais populares
              </button>
            </li>
            <li className='mr-8'>
              <button
                type='button'
                onClick={() => handleChangeTab('top_rated')}
              >
                Mais bem avaliados
              </button>
            </li>
            <li>
              <button type='button' onClick={() => handleChangeTab('latest')}>
                Mais recentes
              </button>
            </li>
          </ul>
          <>{tabsModules[currentTab]}</>
        </div>
      </div>
    </section>
  );
};
