import { FC, ReactNode } from 'react';
import ReactPaginate from 'react-paginate';

type BoxPaginateProps = {
  children: ReactNode;
  pageCount: number;
  currentPage: number;
  initialPage?: number;
  onPageChange?(selectedItem: { selected: number }): void;
};
export const BoxPaginate: FC<BoxPaginateProps> = ({
  children,
  pageCount,
  currentPage,
  initialPage,
  onPageChange,
}) => {
  return (
    <div>
      <span className='italic mb-8'>6 de 78 resultados</span>
      {children}
      <footer className='flex justify-center mt-20'>
        <ReactPaginate
          initialPage={initialPage}
          onPageChange={onPageChange}
          pageCount={pageCount}
          forcePage={currentPage - 1}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          breakLabel='...'
          nextLabel='Próximo >'
          previousLabel='Anterior'
          className='inline-flex -space-x-px flex-wrap justify-center font-semibold text-[#545454] select-none'
          activeClassName='flex items-center justify-center w-[40px] h-[40px] bg-primary border-primary cursor-default pointer-events-none'
          activeLinkClassName='!text-white !bg-primary !border-primary'
          nextLinkClassName='flex items-center justify-center h-[40px] px-[15px] bg-[#FAFAFA] rounded-r-lg border border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-700'
          previousLinkClassName='flex items-center justify-center h-[40px] px-[15px] bg-[#FAFAFA] rounded-l-lg border border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-700'
          pageLinkClassName='flex items-center justify-center w-[40px] h-[40px] leading-tight  border border-[#D9D9D9] hover:bg-gray-100 hover:text-gray-700 bg-[#FAFAFA]'
          breakClassName='flex items-center justify-center w-[40px] h-[40px] text-gray-500 bg-white border border-gray-200 bg-[#FAFAFA]'
        />
      </footer>
    </div>
  );
};
