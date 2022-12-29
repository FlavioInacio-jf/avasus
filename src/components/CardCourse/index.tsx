/* eslint-disable react/display-name */
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Routes } from '../../enums';
import { ICourseSummarized } from '../../interfaces';
import { displayQuantity } from '../../utils';

type CardProps = {
  course: ICourseSummarized;
  expanded?: boolean;
};
export const CardCourse: FC<CardProps> = memo(
  ({ course, expanded = false }) => {
    const {
      id,
      capa,
      titulo,
      parceiros,
      avaliacao,
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
                    <span className='inline-block ml-3'>
                      {displayQuantity(matriculados)}
                    </span>
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
                className='text-secondary font-semibold text-lg whitespace-nowrap'
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
      <article className='w-full max-w-[1100px] xss:max-w-[450px] xs:max-w-[450px] sm:max-w-[450px] md:max-w-[450px] lg:max-w-[450px] h-40 xss:h-[450px] xs:h-[450px] sm:h-[450px] md:h-[450px] lg:h-[450px] p-5 xss:p-4 xs:p-4 sm:p-4 md:p-4 bg-[#F5F5F7] rounded-[20px] xss:rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl'>
        <div className='flex xss:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col h-full'>
          <div className='relative w-[120px] xss:w-full xs:w-full sm:w-full md:w-full lg:w-full h-[120px] xss:h-56 xs:h-56 sm:h-56 md:h-56 lg:h-56 mr-4 xss:mr-0 xs:mr-0 sm:mr-0 md:mr-0 lg:mr-0 rounded-[20px] xss:rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xss:mb-4 xs:mb-4 sm:mb-4 md:mb-4 lg:mb-4 overflow-hidden'>
            <Image
              src={capa}
              alt={`capa ${titulo}`}
              fill
              className='object-cover'
            />
          </div>
          <div className='w-full flex xss:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col justify-between items-center xss:flex-1 xs:flex-1 sm:flex-1 md:flex-1 lg:flex-1'>
            <div className='max-w-[270px] xss:max-w-full xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full'>
              <p className='font-semibold text-xl xss:text-lg xs:text-lg sm:text-lg md:text-lg'>
                {titulo}
              </p>
              <span className='block font-semibold text-primary text-[0.81rem] mt-4'>
                {parceiros}
              </span>
            </div>
            <ul className='flex justify-end flex-1 xss:w-full xs:w-full sm:w-full md:w-full lg:w-full xss:justify-between xs:justify-between sm:justify-between md:justify-between lg:justify-between xss:mt-4 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 xss:text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm'>
              <li className='ml-5 xss:ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0'>
                <div className='flex items-center'>
                  <Image
                    src='/icons/people.svg'
                    alt='Icone relacionado a quantidade de pessoas inscritas'
                    width={30}
                    height={24}
                  />
                  <span className='inline-block ml-3'>
                    {displayQuantity(matriculados)}
                  </span>
                </div>
              </li>
              <li className='ml-5'>
                <div className='flex items-center'>
                  <Image
                    src='/icons/time.svg'
                    alt='Icone relacionado ao tempo de curso'
                    width={23}
                    height={23}
                  />
                  <span className='inline-block ml-3'>{duracao}</span>
                </div>
              </li>

              <li className='flex ml-5 items-center'>
                <span className='text-xl flex gap-2'>{stars}</span>
                <span className='inline-block ml-3'>{avaliacao}</span>
              </li>
            </ul>
            <Link
              href={`${Routes.COURSES}/${Routes.COURSE_MODULE}/${id}`}
              className='btn btn-lg btn-secondary ml-5 xss:ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0 w-44 xss:w-full xs:w-full sm:w-full md:w-full lg:w-full whitespace-nowrap xss:mt-4 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4'
              prefetch={false}
            >
              Ver módulo
            </Link>
          </div>
        </div>
      </article>
    );
  }
);
