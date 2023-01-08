import { NextPage } from 'next';
import { Head } from './head';

const Page: NextPage = () => {
  return (
    <>
      <Head />
      <main className='w-full'>Criar conta</main>
    </>
  );
};

export default Page;
