import Image from 'next/image';
import { FC } from 'react';
import { IPartner } from '../../interfaces';

type CardPartnerProps = {
  partner: IPartner;
};
export const CardPartner: FC<CardPartnerProps> = ({ partner }) => {
  const { capa, titulo } = partner;
  return (
    <article className='w-[350px] xss:w-full'>
      <header className='flex justify-center items-center rounded-[20px] relative w-[350px] xss:w-full h-[200px] overflow-hidden'>
        <Image
          src={capa}
          alt={`Logo da ${titulo}`}
          fill
          loading='lazy'
          quality={100}
          className='object-contain'
        />
      </header>
      <span className='block w-full h-[2px] bg-[#F6303F] mt-4' />
      <div className='mt-3'>
        <p className=' xss:text-base xs:text-lg sm:text-xl text-2xl font-semibold text-center'>
          {titulo}
        </p>
      </div>
    </article>
  );
};
