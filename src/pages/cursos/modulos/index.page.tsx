import { NextPage } from 'next';
import { Head } from './head';

const Page: NextPage = () => {
  return (
    <>
      <Head />
      <main className='w-full'>Módulos Educacionais</main>
    </>
  );
};

export default Page;
