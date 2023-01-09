import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { Routes } from '../../../enums';

type BreadCrumbsProps = {
  children: ReactNode;
};
export const BreadCrumbs: FC<BreadCrumbsProps> = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname.replace('/', '');
  const routeObject = Object.fromEntries(
    Object.entries(Routes).map((value) => value.reverse())
  );

  const breadCrumbs = router.pathname.split('/').map((path) => {
    if (path === currentPath) {
      return (
        <span key={path} className='font-semibold text-black'>
          {routeObject[path]}
        </span>
      );
    }
    return `${routeObject[path] ? routeObject[path] : ''}`;
  });
  return (
    <>
      <div className='w-full px-4'>
        <div className='w-full max-w-[1110px] mx-auto my-8'>
          <div className='text-[#808080] xss:text-sm xs:text-sm'>
            Início / {breadCrumbs}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
