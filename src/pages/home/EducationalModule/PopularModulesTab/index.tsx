import { FC } from 'react';
import { useQuery } from 'react-query';
import { CardCourse, CardCourseSkeleton } from '../../../../components';
import { USE_QUERY_DEFAULT_OPTIONS } from '../../../../constants';
import { QueryKeys } from '../../../../enums';
import { coursesService } from '../../../../services';

export const PopularModulesTab: FC = () => {
  const { data, isLoading } = useQuery(
    QueryKeys.MOST_POPULAR_COURSES,
    () => coursesService.all('_limit=3&_sort=matriculados&_order=desc'),
    USE_QUERY_DEFAULT_OPTIONS
  );
  const courses = data || [];
  return (
    <div className='flex flex-col xss:flex-row xs:flex-row sm:flex-row md:flex-row lg:flex-row xss:flex-wrap xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap xss:justify-center xs:justify-center sm:justify-center md:justify-center lg:justify-center gap-8 mt-8'>
      {isLoading
        ? Array.from({ length: 3 }, (_, index) => index + 1).map((key) => (
            <CardCourseSkeleton key={key} />
          ))
        : courses.map((course) => (
            <CardCourse key={course.id} course={course} />
          ))}
    </div>
  );
};
