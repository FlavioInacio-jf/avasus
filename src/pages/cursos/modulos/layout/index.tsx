import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { ModulesNavigationBarLinks } from './modules-navigation-bar-links.enum';

type ModuleLayoutProps = {
  children: ReactNode;
};
export const ModuleLayout: FC<ModuleLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='w-full px-4'>
        <div className='w-full max-w-[1110px] mx-auto my-8'>
          <div className='text-[#808080] xss:text-sm xs:text-sm'>
            Início / Cursos /
            <span className='font-semibold text-black'> Módulos </span>
          </div>
        </div>
      </div>
      <section className='max-w-[1110px] mx-auto'>
        <h2 className='title title-primary title-4xl text-center mb-8 xss:mb-4 xs:mb-4'>
          Módulos Educacionais
        </h2>
        <ul className='flex font-montserrat font-semibold text-2xl text-[#2F2E41]'>
          {Object.entries(ModulesNavigationBarLinks).map(([label, href]) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </>
  );
};
