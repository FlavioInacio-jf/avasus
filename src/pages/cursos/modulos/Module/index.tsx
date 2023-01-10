/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import {
  BoxPaginate,
  CardCourse,
  CardCourseSkeleton,
} from '../../../../components';
import {
  TOTAL_RESULT_PER_PAGE,
  USE_QUERY_DEFAULT_OPTIONS,
} from '../../../../constants';
import { coursesService } from '../../../../services';

type CourseModuleProps = {
  queryKey: string;
  courseCategory: string;
};
export const CourseModule: FC<CourseModuleProps> = ({
  courseCategory,
  queryKey,
}) => {
  const [page, setPage] = useState(1);
  const [totalResultsAlredyViewed, setTotalResultsAlredyViewed] = useState(0);
  const { data: responseCourseByCategory, isLoading } = useQuery(
    [queryKey, page],
    () =>
      coursesService.all(
        `cateroria=${courseCategory}&_page=${page}&_limit=${TOTAL_RESULT_PER_PAGE}&_order=desc`
      ),
    USE_QUERY_DEFAULT_OPTIONS
  );

  const { data: responseTotalResults } = useQuery(
    `${queryKey}-totalResults`,
    () => coursesService.all(`cateroria=${courseCategory}`),
    { ...USE_QUERY_DEFAULT_OPTIONS, enabled: !responseCourseByCategory }
  );
  const courses = responseCourseByCategory || [];

  const handlePageChange = (selectedItem: { selected: number }) => {
    const currentPage = (selectedItem.selected + 1).toString();
    setPage(Number(currentPage));
  };
  const totalCount = useMemo(
    () => responseTotalResults?.length || 0,
    [responseTotalResults?.length]
  );
  const totalPages = useMemo(
    () => Math.ceil(totalCount / TOTAL_RESULT_PER_PAGE),
    [totalCount]
  );

  useEffect(() => {
    setTotalResultsAlredyViewed(page * TOTAL_RESULT_PER_PAGE);

    if (page === totalPages) {
      setTotalResultsAlredyViewed(totalCount);
    }
  }, [page, totalCount]);

  return (
    <div className='flex flex-col xss:flex-row xs:flex-row sm:flex-row md:flex-row lg:flex-row xss:flex-wrap xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap xss:justify-center xs:justify-center sm:justify-center md:justify-center lg:justify-center gap-8'>
      <BoxPaginate
        page={page}
        totalPages={totalPages}
        totalCount={totalCount}
        onPageChange={handlePageChange}
        totalResultsAlredyViewed={totalResultsAlredyViewed}
      >
        <div className='flex flex-wrap justify-center gap-x-[29px] gap-y-16'>
          {isLoading
            ? Array.from({ length: 3 }, (_, index) => index + 1).map((key) => (
                <CardCourseSkeleton key={key} />
              ))
            : courses.map((course) => (
                <CardCourse key={course.id} course={course} expanded />
              ))}
        </div>
      </BoxPaginate>
    </div>
  );
};
