import { NextApiRequest } from 'next';

export type PageWithPaginationRequestType = NextApiRequest & {
  page: string;
};
