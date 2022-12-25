import { NextPage } from 'next';
import Image from 'next/image';
import { A11y, Lazy, Navigation, Pagination, SwiperOptions } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Page: NextPage = () => {
  const params: SwiperOptions = {
    modules: [Navigation, A11y, Lazy, Pagination],
    preloadImages: false,
    slidesPerView: 1,
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
    pagination: {
      enabled: true,
      clickable: true,
    },
    lazy: true,
  };
  return (
    <section className='w-full relative mb-32'>
      <div className='absolute left-0 top-0 w-full h-[760px]'>
        <Image
          src='/banners/banner-home.png'
          alt='Banner da Avasus '
          fill
          className='object-cover object-center'
          quality={100}
          priority
        />
      </div>
      <div
        className='w-full max-w-[1700px] mx-auto relative h-[760px]
      '
      >
        <Swiper className='h-full' {...params}>
          <SwiperSlide className='flex items-center justify-center !w-full'>
            <div className='flex flex-col items-center justify-center'>
              <Image
                src='/brands/brand-ava-sus-white.svg'
                alt='Logo Avasus'
                width='500'
                height='100'
              />
              <span className='block bg-white w-[150px] h-[2px] mt-4' />
              <Image
                src='/phrases/open-health-knowledge.svg'
                alt='Logo Avasus'
                width='630'
                height='36'
                className='mt-8'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'></SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'></SwiperSlide>
        </Swiper>
        <button
          type='button'
          className={`button-prev swiper-button-prev after:hidden relative !w-16 !h-16 flex items-center justify-center rounded-full !left-0 disabled:hidden`}
        >
          <Image src='/icons/arrow-left.svg' alt='' width={50} height={50} />
          <span className='sr-only'>Voltar</span>
        </button>

        <button
          type='button'
          className={`button-next swiper-button-next after:hidden relative !w-16 !h-16 flex items-center justify-center rounded-full !right-0 disabled:hidden`}
        >
          <Image src='/icons/arrow-right.svg' alt='' width={50} height={50} />
          <span className='sr-only'>Avançar</span>
        </button>
      </div>
    </section>
  );
};

export default Page;
