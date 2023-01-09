import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type LoginLayout = {
  children: ReactNode;
};
export const LoginLayout: FC<LoginLayout> = ({ children }) => {
  return (
    <div className='grid grid-cols-2 xss:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-1 justify-center items-start min-h-screen'>
      <div className='w-full h-screen flex items-center justify-center px-8'>
        <div className='w-full max-w-[500px] flex flex-col'>
          <Link
            href='/'
            prefetch={false}
            className='block cursor-pointer mx-auto relative'
          >
            <Image
              src='/brands/brand-ava-sus-mixed-color.svg'
              alt='Logo Avasus'
              width={200}
              height={50}
              priority
            />
          </Link>
          {children}
        </div>
      </div>
      <div className='xss:hidden xs:hidden sm:hidden md:hidden lg:hidden relative h-screen'>
        <Image
          src='/banners/banner-home.png'
          alt='Banner da Avasus '
          fill
          className='object-cover'
          quality={100}
          priority
        />
      </div>
    </div>
  );
};
