import { Endpoint } from '../enums';
import { ITransparency } from '../interfaces';
import { api } from './api.service';

const { get } = api;
export const transparencyService = {
  single: async (): Promise<ITransparency | undefined> => {
    try {
      const res = await get(`${Endpoint.TRANSPARENCY}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
};
