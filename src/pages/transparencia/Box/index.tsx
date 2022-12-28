import { FC, ReactNode } from 'react';

type BoxProps = {
  children: ReactNode;
};
export const Box: FC<BoxProps> = ({ children }) => {
  return (
    <div className='w-full h-full bg-[#F5F5F7] rounded-[20px] py-[30px] px-[40px] shadow-[0_4px_4px_rgba(0,0,0,0.1)]'>
      {children}
    </div>
  );
};
