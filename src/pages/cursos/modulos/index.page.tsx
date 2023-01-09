import { NextPage } from 'next';
import { Tabs } from '../../../components';
import { TabPanel } from '../../../components/Tabs/TabPanel';
import { Head } from './head';

const Page: NextPage = () => {
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
      <section className='max-w-[1110px] mx-auto'>
        <h2 className='title title-primary title-4xl text-center mb-8 xss:mb-4 xs:mb-4'>
          Módulos Educacionais
        </h2>
        <Tabs>
          <TabPanel title='Covid 19'>ff</TabPanel>
          <TabPanel title='Sífilis e outras Ist’s'>ff</TabPanel>
          <TabPanel title='Preceptoria'>ff</TabPanel>
          <TabPanel title='Doenças raras'>ff</TabPanel>
          <TabPanel title='Web Palestras'>ff</TabPanel>
          <TabPanel title='Sistemas prisional'>ff</TabPanel>
          <TabPanel title='OPAS'>ff</TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default Page;
