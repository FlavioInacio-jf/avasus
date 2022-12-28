import csn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { BsList, BsSearch, BsX } from 'react-icons/bs';
import { NavigationBarLinks } from '../../enums';

export const Header: FC = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const handleToggleMenuMobile = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const handleCloseMenuMobile = () => {
    setIsMenuMobileOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize > 1110) handleCloseMenuMobile();
  }, [windowSize]);

  useEffect(() => {
    if (isMenuMobileOpen && window.innerWidth <= 1110) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuMobileOpen]);
  return (
    <header className='w-full h-[70px] px-4 shadow-[0_4px_4px_rgba(0,0,0,0.1)] bg-white sticky top-0 z-30'>
      <div className='max-w-[1700px] h-full mx-auto max-h-[6rem] flex items-center justify-between'>
        <Link
          href='/'
          prefetch={false}
          className='relative block w-[160px] h-[50px] xss:w-[100px] xs:w-[120px] sm:w-[120px] md:w-[120px] lg:w-[120px]'
        >
          <Image
            src='/brands/brand-ava-sus-mixed-color.svg'
            alt='Logo Avasus'
            fill
            priority
          />
        </Link>
        <button
          type='button'
          className='hidden xss:flex xs:flex sm:flex md:flex lg:flex absolute right-0 text-4xl'
          onClick={handleToggleMenuMobile}
        >
          <span className='sr-only'>Menu</span>
          {isMenuMobileOpen ? <BsX /> : <BsList />}
        </button>
        <nav
          className={csn(
            'font-semibold text flex-1 ml-16 bg-white text-[#2F2E41] xss:w-screen xs:w-screen sm:w-screen md:w-screen lg:w-screen xss:min-h-screen xs:min-h-screen sm:min-h-screen md:min-h-screen lg:min-h-screen xss:fixed xs:fixed sm:fixed md:fixed lg:fixed xss:top-[70px] xs:top-[70px] sm:top-[70px] md:top-[70px] lg:top-[70px] xss:left-0 xs:left-0  sm:left-0  md:left-0 lg:left-0 xss:ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0',
            {
              'xss:hidden xs:hidden sm:hidden md:hidden lg:hidden':
                !isMenuMobileOpen,
            }
          )}
        >
          <ul className='flex items-center xss:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xss:items-start xs:items-start sm:items-start md:items-start lg:items-start'>
            {Object.entries(NavigationBarLinks).map(([label, href]) => (
              <li
                key={label}
                className='mr-8 xss:mr-0 xs:mr-0 sm:mr-0 md:mr-0 lg:mr-0 xss:w-full xs:w-full  sm:w-full md:w-full lg:w-full xss:px-4 xs:px-4 sm:px-4 md:px-4 lg:px-4 xss:order-2 xs:order-2 sm:order-2 md:order-2 lg:order-2'
                onClick={handleCloseMenuMobile}
                onKeyPress={handleCloseMenuMobile}
              >
                <Link
                  href={href}
                  prefetch={false}
                  className='block xss:border-b xs:border-b sm:border-b md:border-b lg:border-b  xss:py-4 xs:py-4 sm:py-4 md:py-4 lg:py-4 xss:text-lg xs:text-lg sm:text-lg md:text-lg lg:text-lg'
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className='flex-1 xss:w-full xs:w-full sm:w-full md:w-full lg:w-full xss:px-4 xs:px-4 sm:px-4 md:px-4 lg:px-4 xss:mt-8 xs:mt-8 sm:mt-8 md:mt-8 lg:mt-8 xss:order-3 xs:order-3 sm:order-3 md:order-3 lg:order-3'>
              <div className='w-full max-w-[350px] xss:max-w-full xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full ml-auto'>
                <label className='sr-only'>Pesquisar</label>
                <div className='relative flex items-center border-2 border-black/20 rounded-full px-5 h-[40px]'>
                  <BsSearch className='text text-[#545454] mr-2' />
                  <input
                    type='search'
                    placeholder='Busca por um assunto...'
                    className=' placeholder:text-[#545454] outline-none w-full'
                  />
                </div>
              </div>
            </li>
            <li className='xss:order-1 xs:order-1 sm:order-1 md:order-1 lg:order-1 xss:w-full xs:w-full sm:w-full md:w-full lg:w-full xss:py-8 xs:py-8 sm:py-8 md:py-8 lg:py-8'>
              <div className='flex xss:flex-wrap xss:px-4 xs:px-4 sm:px-4 md:px-4 lg:px-4'>
                <Link
                  href='/'
                  prefetch={false}
                  className='btn btn-lg btn-secondary-outline ml-4 xss:ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0 xss:flex-1 xs:flex-1 sm:flex-1 md:flex-1 lg:flex-1'
                >
                  Entrar
                </Link>
                <Link
                  href='/'
                  prefetch={false}
                  className='btn btn-lg btn-secondary ml-4 xss:flex-1 xs:flex-1 sm:flex-1 md:flex-1 lg:flex-1'
                >
                  Cadastrar
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
