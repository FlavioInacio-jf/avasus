import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

export const Header: FC = () => {
  return (
    <header className='w-full h-[70px] sticky '>
      <div className='max-w-[1700px] h-full mx-auto max-h-[6rem] flex items-center justify-between'>
        <Link href='/' prefetch={false} className='relative block'>
          <Image
            src='/brands/brand-ava-sus-mixed-color.svg'
            alt='Logo Avasus'
            width={160}
            height={50}
          />
        </Link>
        <nav className='font-semibold text flex-1 ml-16 text-[#2F2E41]'>
          <Link href='' className='mr-8'>
            Início
          </Link>
          <Link href='' className='mr-8'>
            Sobre Nós
          </Link>
          <Link href='' className='mr-8'>
            Cursos
          </Link>
          <Link href='' className='mr-8'>
            Parceiros
          </Link>
          <Link href='' className='mr-8'>
            Transparência
          </Link>
          <Link href='' className='mr-8'>
            Contato
          </Link>
        </nav>

        <div className='flex'>
          <div className='flex-1'>
            <label className='sr-only'>Pesquisar</label>
            <div className='relative flex items-center border-2 border-black/20 rounded-full px-5 h-[40px]'>
              <BsSearch className='text text-[#545454] mr-2' />
              <input
                type='search'
                placeholder='Busca por um assunto...'
                className=' placeholder:text-[#545454] outline-none'
              />
            </div>
          </div>
          <Link
            href='/'
            prefetch={false}
            className='btn btn-lg btn-secondary-outline ml-4'
          >
            Entrar
          </Link>
          <Link
            href='/'
            prefetch={false}
            className='btn btn-lg btn-secondary ml-4'
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </header>
  );
};
