import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className='w-full'>
      <div className='max-w-[1700px] mx-auto py-[1.6rem] max-h-[7rem] flex items-center justify-between'>
        <Link
          href='/'
          prefetch={false}
          className='w-[180px] h-[30px] relative block'
        >
          <Image src='/brands/brand-ava-sus-mixed-color.svg' alt='' fill />
        </Link>
        <nav className='font-semibold text-xl'>
          <Link href=''>Início</Link>
          <Link href=''>Sobre Nós</Link>
          <Link href=''>Cursos</Link>
          <Link href=''>Parceiros</Link>
          <Link href=''>Transparência</Link>
          <Link href=''>Contato</Link>
        </nav>
        <input type='search' placeholder='Busca por um assunto...' />
        <Link href='/' prefetch={false}>
          Entrar
        </Link>
        <Link href='/' prefetch={false}>
          Cadastrar
        </Link>
      </div>
    </header>
  );
};
