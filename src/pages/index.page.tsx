import { NextPage } from 'next';
import { BannerHome } from './home/BannerHome';

const Page: NextPage = () => {
  return (
    <main className='w-full'>
      <BannerHome />
    </main>
  );
};

export default Page;
