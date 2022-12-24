import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export const Footer: FC = () => {
  return (
    <footer className='w-full'>
      <div className='bg-primary px-4 py-8'>
        <div className='max-w-[1100px] mx-auto justify-center'>
          <p className='text-[1.375rem] font-semibold text-white text-center mb-8'>
            Realização
          </p>
          <div className='flex justify-center'>
            <Image
              src='/brands/brand-lais-white.svg'
              alt='Logo Lais'
              width={245}
              height={70}
              className='mr-20'
            />

            <Image
              src='/brands/brand-ufrn-white.svg'
              alt='Logo UFRN'
              width={224}
              height={61}
            />
          </div>
        </div>
      </div>
      <div className='bg-tertiary px-4 py-16 text-white'>
        <div className='max-w-[1100px] mx-auto flex'>
          <div className='flex-1'>
            <Image
              src='/brands/brand-lais-white.svg'
              alt='Logo Lais'
              width={120}
              height={37}
              className='mr-20 mb-4'
            />
            <p className='max-w-[200px]'>
              Laboratório de Inovação Tecnológica em Saúde.
            </p>
          </div>
          <div className='flex-1'>
            <p className='font-montserrat text-2xl font-semibold mb-4'>
              Links Úteis
            </p>
            <nav className='flex flex-col text font-normal'>
              <Link href='' prefetch={false} className='mb-2'>
                Início
              </Link>
              <Link href='' prefetch={false} className='mb-2'>
                Sobre Nós
              </Link>
              <Link href='' prefetch={false} className='mb-2'>
                Módulos
              </Link>
              <Link href='' prefetch={false} className='mb-2'>
                Parceiros Transparência
              </Link>
              <Link href='' prefetch={false} className='mb-2'>
                Transparência
              </Link>
            </nav>
          </div>
          <div className='flex-1'>
            <p className='font-montserrat text-2xl font-semibold mb-4 ml-4'>
              Redes sociais
            </p>
            <ul className='flex text font-normal'>
              <li className='mr-2'>
                <Link
                  href=''
                  target='_blank'
                  rel='noreferrer'
                  prefetch={false}
                  className='inline-block px-4 py-2 text-2xl'
                >
                  <span className='sr-only'>Facebook</span>
                  <FaFacebookF />
                </Link>
              </li>
              <li className='mr-2'>
                <Link
                  href=''
                  target='_blank'
                  rel='noreferrer'
                  prefetch={false}
                  className='inline-block px-4 py-2 text-2xl'
                >
                  <span className='sr-only'>Twitter</span>
                  <BsTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href=''
                  target='_blank'
                  rel='noreferrer'
                  prefetch={false}
                  className='inline-block px-4 py-2 text-2xl'
                >
                  <span className='sr-only'>Instagram</span>
                  <BsInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-quartenary px-4 flex items-center'>
        <div className='max-w-[1100px] mx-auto py-4'>
          <p className='text-white font-normal text-center'>
            2022 © LAIS (HUOL). Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
