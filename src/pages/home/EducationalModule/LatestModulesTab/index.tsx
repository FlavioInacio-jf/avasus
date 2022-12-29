import Link from 'next/link';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { CardCourse } from '../../../../components';
import { USE_QUERY_DEFAULT_OPTIONS } from '../../../../constants';
import { QueryKeys } from '../../../../enums';
import { coursesService } from '../../../../services';

export const LatestModulesTab: FC = () => {
  const { data } = useQuery(
    QueryKeys.LAST,
    () => coursesService.all('_limit=3&_sort=criado_em&_order=desc'),
    USE_QUERY_DEFAULT_OPTIONS
  );
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
