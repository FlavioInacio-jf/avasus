export interface IServiceApiRequest<T> {
  all: (query?: string) => Promise<T[] | undefined>;
  query: (query: string) => Promise<T[] | undefined>;
}
