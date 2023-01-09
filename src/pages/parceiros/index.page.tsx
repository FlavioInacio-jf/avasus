import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { BoxPaginate, CardPartner } from '../../components';
import { withPaginationSSR } from '../../helpers';
import { IPaginate, IPartner } from '../../interfaces';
import { partnersService } from '../../services';
import { NextPageWithLayout, PageWithPaginationRequestType } from '../../types';
import { BreadCrumbs } from '../layout/BreadCrumbs';
import { Head } from './head';

interface PageProps extends IPaginate {
  partners: IPartner[];
}
const Page: NextPageWithLayout<PageProps> = ({
  partners,
  page,
  totalPages,
  totalCount,
  totalResultsAlredyViewed,
}) => {
  const router = useRouter();

  const handlePageChange = (selectedItem: { selected: number }) => {
    const currentPage = (selectedItem.selected + 1).toString();
    router.push({
      pathname: `${router.pathname}`,
      query: { ...router.query, page: currentPage },
    });
  };
  return (
    <>
      <Head />

      <section className='w-full px-4 mb-48 xss:mb-16 xs:mb-16 md:mb-16'>
        <div className='max-w-[1110px] mx-auto'>
          <h2 className='title title-primary title-4xl mb-8 xss:mb-4 xs:mb-4'>
            Nossos parceiros
          </h2>
          <BoxPaginate
            page={page}
            totalPages={totalPages}
            totalCount={totalCount}
            onPageChange={handlePageChange}
            totalResultsAlredyViewed={totalResultsAlredyViewed}
          >
            <ul className='flex flex-wrap justify-center items-start gap-x-[29px] gap-y-16'>
              {partners.map((partner) => (
                <CardPartner key={partner.id} partner={partner} />
              ))}
            </ul>
          </BoxPaginate>
        </div>
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BreadCrumbs>{page} </BreadCrumbs>;
};

export const getServerSideProps: GetServerSideProps =
  withPaginationSSR<IPartner>(
    async (ctx): Promise<GetServerSidePropsResult<PageProps>> => {
      const req = ctx.req as PageWithPaginationRequestType<IPartner>;
      const page = req.page;
      const totalCount = req.totalCount;
      const totalPages = req.totalPages;
      const totalResultsAlredyViewed = req.totalResultsAlredyViewed;

      const partners = req.data;
      return {
        props: {
          partners,
          page,
          totalPages,
          totalCount,
          totalResultsAlredyViewed,
        },
      };
    },
    partnersService
  );

export default Page;
