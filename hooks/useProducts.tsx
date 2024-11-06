import { fetchProducts } from "@/app/lib/data";
import type { ProductProps } from "@/app/lib/definitions";
import useSWR from "swr";

export function useProducts() {
	const { data, error, isLoading } = useSWR<ProductProps[]>(
		"fetchProducts",
		fetchProducts,
	);
	return {
		products: data,
		isLoading: isLoading,
		isError: error,
	};
}
