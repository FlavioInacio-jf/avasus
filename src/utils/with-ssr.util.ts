import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const withSSR = (fn: GetServerSideProps): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext) => {
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
