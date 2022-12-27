import { Endpoint } from '../enums';
import { ICourse } from '../interfaces';
import { api } from './api.service';

const { get } = api;
export const coursesService = {
  all: async (query?: string): Promise<ICourse[] | undefined> => {
    try {
      const res = await get(`${Endpoint.COURSES}${query ? `?${query}` : ''}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
  single: async (id: string): Promise<ICourse | undefined> => {
    try {
      const res = await get(`${Endpoint.COURSES}/${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },

  query: async (query: string): Promise<ICourse[] | undefined> => {
    try {
      const res = await get(`${Endpoint.COURSES}${query ? `?${query}` : ''}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
};
