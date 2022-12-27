import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import { CardPartner } from '../../components';
import { TOTAL_RESULT_PER_PAGE } from '../../constants';
import { IPaginate, IPartner } from '../../interfaces';
import { partnersService } from '../../services';
import { PageWithPaginationRequestType } from '../../types';
import { withPaginationSSR } from '../../utils';

interface PageProps extends IPaginate {
  partners: IPartner[];
}
const Page: NextPage<PageProps> = ({ partners }) => {
  return (
    <main>
      <section className='w-full px-4'>
        <div className='max-w-[1110px] mx-auto'>
          <h2 className='title title-primary title-4xl'>Nossos parceiros</h2>
          <ul className='flex flex-wrap items-start'>
            {partners.map((partner) => (
              <CardPartner key={partner.id} partner={partner} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = withPaginationSSR(
  async (ctx): Promise<GetServerSidePropsResult<PageProps>> => {
    const req = ctx.req as PageWithPaginationRequestType;
    const page = req.page;

    const partners =
      (await partnersService.query(
        `_page=${page}&_limit=${TOTAL_RESULT_PER_PAGE}`
      )) || [];

    return { props: { partners, pagina: page } };
  }
);

export default Page;
