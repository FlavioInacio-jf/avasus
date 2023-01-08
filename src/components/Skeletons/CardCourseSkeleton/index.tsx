import { FC } from 'react';
import {
  BsFillClockFill,
  BsFillImageFill,
  BsFillPeopleFill,
  BsFillStarFill,
} from 'react-icons/bs';

type CardCourseSkeletonProps = {
  expanded?: boolean;
};
export const CardCourseSkeleton: FC<CardCourseSkeletonProps> = ({
  expanded = false,
}) => {
  if (expanded) {
    return <div></div>;
  }

  return (
    <article
      role='status'
      className='w-full max-w-[1100px] xss:max-w-[450px] xs:max-w-[450px] sm:max-w-[450px] md:max-w-[450px] lg:max-w-[450px] h-40 xss:h-[450px] xs:h-[450px] sm:h-[450px] md:h-[450px] lg:h-[450px] p-5 xss:p-4 xs:p-4 sm:p-4 md:p-4 rounded-[20px] xss:rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl border shadow animate-pulse'
    >
      <div className='flex xss:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col h-full'>
        <div className='relative w-[120px] xss:w-full xs:w-full sm:w-full md:w-full lg:w-full h-[120px] xss:h-56 xs:h-56 sm:h-56 md:h-56 lg:h-56 mr-4 xss:mr-0 xs:mr-0 sm:mr-0 md:mr-0 lg:mr-0 rounded-[20px] xss:rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xss:mb-4 xs:mb-4 sm:mb-4 md:mb-4 lg:mb-4 overflow-hidden'>
          <BsFillImageFill className='w-full h-full text-gray-200 mx-auto' />
        </div>

        <div className='w-full flex xss:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col justify-between items-center xss:flex-1 xs:flex-1 sm:flex-1 md:flex-1 lg:flex-1'>
          <div className='max-w-[270px] xss:max-w-full xs:max-w-full sm:max-w-full md:max-w-full lg:max-w-full'>
            <p className='font-semibold text-xl xss:text-lg xs:text-lg sm:text-lg md:text-lg w-40 h-10 bg-gray-200' />
            <span className='block font-semibold text-primary text-[0.81rem] mt-4 h-4 bg-gray-200' />
          </div>
          <ul className='flex justify-end flex-1 xss:w-full xs:w-full sm:w-full md:w-full lg:w-full xss:justify-between xs:justify-between sm:justify-between md:justify-between lg:justify-between xss:mt-4 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 xss:text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm'>
            <li className='ml-5 xss:ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0'>
              <div className='flex items-center'>
                <BsFillPeopleFill className='text-[23px] text-gray-200' />
                <span className='inline-block ml-3'></span>
              </div>
            </li>
            <li className='ml-5'>
              <div className='flex items-center'>
                <BsFillClockFill className='text-[23px] text-gray-200' />
                <span className='inline-block ml-3'></span>
              </div>
            </li>

            <li className='flex ml-5 items-center'>
              <span className='text-xl flex gap-2 text-gray-200'>
                <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill />
                <BsFillStarFill /> <BsFillStarFill />
              </span>
              <span className='inline-block ml-3'></span>
            </li>
          </ul>
          <span className='btn btn-lg btn-secondary ml-5 xss:ml-0 xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0 w-44 xss:w-full xs:w-full sm:w-full md:w-full lg:w-full whitespace-nowrap xss:mt-4 xs:mt-4 sm:mt-4 md:mt-4 lg:mt-4 bg-gray-200 border-gray-300'>
            Ver módulo
          </span>
        </div>
      </div>
    </article>
  );
};
