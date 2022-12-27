import { Endpoint } from '../enums';
import { IPartner } from '../interfaces';
import { api } from './api.service';

const { get } = api;
export const partnersService = {
  all: async (query?: string): Promise<IPartner[] | undefined> => {
    try {
      const res = await get(`${Endpoint.PARTNERS}${query ? `?${query}` : ''}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
  single: async (id: string): Promise<IPartner | undefined> => {
    try {
      const res = await get(`${Endpoint.PARTNERS}/${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },

  query: async (query: string): Promise<IPartner[] | undefined> => {
    try {
      const res = await get(`${Endpoint.PARTNERS}${query ? `?${query}` : ''}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
};
