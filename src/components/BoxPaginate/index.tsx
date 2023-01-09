import csn from 'classnames';
import { FC, ReactNode } from 'react';
import ReactPaginate from 'react-paginate';
import { IPaginate } from '../../interfaces';

interface BoxPaginateProps extends IPaginate {
  children: ReactNode;
  initialPage?: number;
  onPageChange?(selectedItem: { selected: number }): void;
}
export const BoxPaginate: FC<BoxPaginateProps> = ({
  children,
  initialPage,
  onPageChange,
  page,
  totalCount,
  totalPages,
  totalResultsAlredyViewed,
}) => {
  const isFirstPage = page === 1;
  const isLastPage = totalPages === page;

  return (
    <>
      <span className='inline-block italic mb-8'>
        {totalResultsAlredyViewed} de {totalCount} resultados
      </span>
      {children}
      <footer className='flex justify-center mt-20'>
        <ReactPaginate
          initialPage={initialPage}
          onPageChange={onPageChange}
          pageCount={totalPages}
          forcePage={page - 1}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          breakLabel='...'
          nextLabel='Próximo >'
          previousLabel='Anterior'
          className='inline-flex -space-x-px xss:flex-wrap justify-center font-semibold text-[#545454] select-none'
          activeClassName={csn(
            'flex items-center justify-center w-[40px] h-[40px] bg-primary border-primary cursor-default pointer-events-none',
            {
              'rounded-r-[15px] overflow-hidden': isLastPage,
              'rounded-l-[15px] overflow-hidden': isFirstPage,
            }
          )}
          activeLinkClassName='!text-white !bg-primary !border-primary'
          nextLinkClassName={csn(
            'flex items-center justify-center h-[40px] px-[15px] bg-[#FAFAFA] rounded-r-lg border border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-700',
            { hidden: isLastPage }
          )}
          previousLinkClassName={csn(
            'flex items-center justify-center h-[40px] px-[15px] bg-[#FAFAFA] rounded-l-lg border border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-700',
            { hidden: isFirstPage }
          )}
          pageLinkClassName='flex items-center justify-center w-[40px] h-[40px] leading-tight  border border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-700 bg-[#FAFAFA]'
          breakClassName='flex items-center justify-center w-[40px] h-[40px] text-gray-500 bg-white border border-gray-200 bg-[#FAFAFA]'
        />
      </footer>
    </>
  );
};
