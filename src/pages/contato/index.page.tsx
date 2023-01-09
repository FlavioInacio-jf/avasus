import { NextPage } from 'next';
import { Head } from './head';

const Page: NextPage = () => {
  return (
    <>
      <Head />
      <div className='w-full'>Contato</div>
    </>
  );
};

export default Page;
