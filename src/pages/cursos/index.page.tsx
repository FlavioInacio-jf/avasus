import { NextPage } from 'next';
import { Head } from './head';

const Page: NextPage = () => {
  return (
    <>
      <Head />
      <main className='w-full'>Cursos</main>
    </>
  );
};

export default Page;
