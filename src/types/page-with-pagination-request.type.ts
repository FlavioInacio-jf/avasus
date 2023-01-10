import { NextApiRequest } from 'next';
import { IPaginate } from './../interfaces/paginate.interface';

export type PageWithPaginationRequestType<T> = NextApiRequest &
  IPaginate & {
    data: T[];
  };
