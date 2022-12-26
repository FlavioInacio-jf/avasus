import { NextPage } from 'next';
import { BannerHome } from './home/BannerHome';
import { EducacionalModule } from './home/EducationalModule';

const Page: NextPage = () => {
  return (
    <main className='w-full'>
      <BannerHome />
      <EducacionalModule />
    </main>
  );
};

export default Page;
