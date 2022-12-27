import Image from 'next/image';
import { FC } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { A11y, Autoplay, Lazy, Navigation, SwiperOptions } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICourseCredit } from '../../../../interfaces';

type CourseCreditCarouselProps = {
  credits: ICourseCredit[];
};
export const CourseCreditCarousel: FC<CourseCreditCarouselProps> = ({
  credits,
}) => {
  const params: SwiperOptions = {
    modules: [Navigation, A11y, Lazy, Autoplay],
    preloadImages: false,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1280: {
        slidesPerView: 4,
        centeredSlides: true,
      },
    },
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
    lazy: true,
  };
  return (
    <div className='relative'>
      <div className='px-[48px]'>
        <Swiper className='flex items-center h-full' {...params}>
          {credits.map(({ titulo, capa }, index) => (
            <SwiperSlide
              key={`${titulo}:${index}`}
              className='flex items-center justify-center'
            >
              <Image src={capa} alt={titulo} width={220} height={175} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        type='button'
        className={`button-prev swiper-button-prev after:hidden relative !w-auto !h-full !top-0 !right-auto !mt-0 flex items-center justify-center rounded-full  disabled:hidden text-5xl !text-secondary xss:!hidden xs:!hidden sm:!hidden md:!hidden lg:!hidden`}
      >
        <BsChevronLeft />
        <span className='sr-only'>Voltar</span>
      </button>

      <button
        type='button'
        className={`button-next swiper-button-next after:hidden relative !w-auto !h-full !top-0 !right-0 !mt-0 flex items-center justify-center rounded-full  disabled:hidden text-5xl !text-secondary xss:!hidden xs:!hidden sm:!hidden md:!hidden lg:!hidden`}
      >
        <BsChevronRight />
        <span className='sr-only'>Avançar</span>
      </button>
    </div>
  );
};
