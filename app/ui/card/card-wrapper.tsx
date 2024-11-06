"use client";
import { useProducts } from "@/hooks/useProducts";
import { CardItem } from "./card-item";

export default function CardWrapper() {
	const products = useProducts();

	return (
		<section className="flex justify-center flex-wrap gap-4 w-full max-w-[1480px] ">
			{products.products?.map((products) => (
				<CardItem key={products.id} product={products} />
			))}
		</section>
	);
}
