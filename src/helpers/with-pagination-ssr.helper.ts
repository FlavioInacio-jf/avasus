import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { IPaginate } from '../interfaces';
import { PageWithPaginationRequestType } from '../types';

export const withPaginationSSR = (
  fn: GetServerSideProps
): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext) => {
    const req = ctx.req as PageWithPaginationRequestType;
    const query = ctx.query as unknown as IPaginate;

    if (Object.keys(query).length > 1) {
      return {
        notFound: true,
      };
    }
    const pagina = query?.pagina || '1';

    // Check if the page is valid
    if (Number(pagina) < 1) {
      return {
        notFound: true,
      };
    }
    req.page = pagina;
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
