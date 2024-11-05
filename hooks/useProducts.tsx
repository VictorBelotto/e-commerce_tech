import useSWR from 'swr';
import { fetchProducts } from '@/app/lib/data';
import { ProductProps } from '@/app/lib/definitions';

export function useProducts() {
  const { data, error, isLoading } = useSWR<ProductProps[]>('fetchProducts',fetchProducts);
  return {
    products: data,
    isLoading: isLoading,
    isError: error,
  };
}
