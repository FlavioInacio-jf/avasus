import Link from 'next/link';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { CardCourse } from '../../../../components';
import { coursesService } from '../../../../services';

export const TopRatedModulesTab: FC = () => {
  const { data } = useQuery('dd', () => coursesService.all(''), {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
  const courses = data || [];

  return (
    <>
      <div className='flex flex-col gap-8 mt-8'>
        {courses.map((course) => (
          <CardCourse key={course.id} course={course} />
        ))}
      </div>
      <footer className='w-full flex justify-center mt-16'>
        <Link href='' className='btn btn-secondary btn-xl'>
          Ver mais
        </Link>
      </footer>
    </>
  );
};
