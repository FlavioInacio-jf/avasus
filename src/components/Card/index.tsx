/* eslint-disable react/display-name */
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Routes } from '../../enums';
import { ICourseSummarized } from '../../interfaces';

type CardProps = {
  course: ICourseSummarized;
  expanded?: boolean;
};
export const Card: FC<CardProps> = memo(({ course, expanded = false }) => {
  const {
    id,
    capa,
    titulo,
    parceiros,
    avaliacao,
    numero_avaliacoes,
    matriculados,
    duracao,
    resumo,
  } = course;

  const stars = Array.from({ length: 5 }, (x, i) => i + 1).map((item) => {
    const [wholePart, decimalPart] = avaliacao.split('.');

    const numberDecimalPart = parseInt(decimalPart, 10);
    const numberWholePart = parseInt(wholePart, 10);

    if (
      item <= numberWholePart ||
      (numberDecimalPart > 5 && item - numberWholePart < 2)
    ) {
      return <BsStarFill key={item} className='text-primary' />;
    }

    if (numberDecimalPart <= 5 && item - numberWholePart < 2) {
      return <BsStarHalf key={item} className='text-primary' />;
    }

    return <BsStar key={item} />;
  });

  if (expanded) {
    return (
      <article className='w-full max-w-[350px] '>
        <div className='flex flex-col'>
          <Image
            src={capa}
            alt={`capa ${titulo}`}
            width={350}
            height={200}
            className='object-cover rounded-[20px]'
          />
          <div className='mt-3'>
            <p className='font-semibold text-2xl'>{titulo}</p>
            <span className='block font-semibold text-primary text-[0.81rem] mt-3'>
              {parceiros}
            </span>

            <ul className='flex mt-3 text-[13px]'>
              <li>
                <div className='flex'>
                  <Image
                    src='/icons/people.svg'
                    alt='Icone relacionado a quantidade de pessoas inscritas'
                    width={24}
                    height={19}
                  />
                  <span className='inline-block ml-3'>{matriculados}</span>
                </div>
              </li>
              <li className='ml-4'>
                <div className='flex'>
                  <Image
                    src='/icons/time.svg'
                    alt='Icone relacionado ao tempo de curso'
                    width={18}
                    height={18}
                  />
                  <span className='inline-block ml-3'>{duracao}</span>
                </div>
              </li>
              <li className='flex  ml-auto'>
                <span className='text-[1rem] flex gap-2'>{stars}</span>
                <span className='inline-block ml-3'>{avaliacao}</span>
              </li>
            </ul>
            <p className='text-sm leading-relaxed font-medium h-[90px] truncate whitespace-pre-wrap overflow-hidden mt-4'>
              {resumo}
            </p>
          </div>
          <footer className='flex justify-end'>
            <Link
              href={`${Routes.COURSES}/${Routes.COURSE_MODULE}/${id}`}
              className='text-secondary font-semibold text-lg'
              prefetch={false}
            >
              Ver módulo
            </Link>
          </footer>
        </div>
      </article>
    );
  }
  return (
    <article className='w-full max-w-[1100px] h-40 p-5 bg-[#F5F5F7] rounded-[20px]'>
      <div className='flex'>
        <div className='relative w-[120px] h-[120px] mr-4 rounded-[20px] overflow-hidden'>
          <Image
            src={capa}
            alt={`capa ${titulo}`}
            fill
            className='object-cover'
          />
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='max-w-[270px]'>
            <p className='font-semibold text-xl'>{titulo}</p>
            <span className='block font-semibold text-primary text-[0.81rem] mt-4'>
              {parceiros}
            </span>
          </div>
          <ul className='flex justify-end flex-1'>
            <li className='ml-5'>
              <div className='flex'>
                <Image
                  src='/icons/people.svg'
                  alt='Icone relacionado a quantidade de pessoas inscritas'
                  width={30}
                  height={24}
                />
                <span className='inline-block ml-3'>{matriculados}</span>
              </div>
            </li>
            <li className='ml-5'>
              <div className='flex'>
                <Image
                  src='/icons/time.svg'
                  alt='Icone relacionado ao tempo de curso'
                  width={23}
                  height={23}
                />
                <span className='inline-block ml-3'>{duracao}</span>
              </div>
            </li>

            <li className='flex ml-5'>
              <span className='text-xl flex gap-2'>{stars}</span>
              <span className='inline-block ml-3'>{avaliacao}</span>
            </li>
          </ul>
          <Link
            href={`${Routes.COURSES}/${Routes.COURSE_MODULE}/${id}`}
            className='btn btn-lg btn-secondary ml-5 w-44'
            prefetch={false}
          >
            Ver módulo
          </Link>
        </div>
      </div>
    </article>
  );
});
