import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { TOTAL_RESULT_PER_PAGE } from '../constants';
import { IPaginate, IServiceApiRequest } from '../interfaces';
import { PageWithPaginationRequestType } from '../types';

export const withPaginationSSR = <T>(
  fn: GetServerSideProps,
  serviceApiRequest: IServiceApiRequest<T>
): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext) => {
    try {
      const req = ctx.req as PageWithPaginationRequestType<T>;
      const query = ctx.query as unknown as IPaginate;
      const page = Number(query?.page || '1');
      const totalCount = (await serviceApiRequest.all())?.length || 0;
      const totalPages = Math.floor(totalCount / TOTAL_RESULT_PER_PAGE);
      let totalResultsAlredyViewed = page * TOTAL_RESULT_PER_PAGE;

      // Check if the page is valid
      if (page > totalPages || page < 1) {
        return {
          notFound: true,
        };
      }

      const data =
        (await serviceApiRequest.query(
          `_page=${page}&_limit=${TOTAL_RESULT_PER_PAGE}`
        )) || [];

      if (page === totalPages) {
        totalResultsAlredyViewed -= totalCount % TOTAL_RESULT_PER_PAGE;
      }
      if (page > totalPages) {
        return {
          notFound: true,
        };
      }
      req.data = data;
      req.page = page;
      req.totalCount = totalCount;
      req.totalPages = totalPages;
      req.totalResultsAlredyViewed = totalResultsAlredyViewed;
    } catch {
      return {
        notFound: true,
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      console.error(err);
      return {
        notFound: true,
      };
    }
  };
};
