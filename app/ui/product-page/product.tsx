"use client";
import { useProducts } from "@/hooks/useProducts";
import React from "react";
import Card from "./card";
import Description from "./description";
import TechnicalInfo from "./technicalInfo";

export default function Product({ id }: { id: string }) {
	const { products } = useProducts();
	const product = products?.find((p) => p.id === id);
	if (!product) {
		return <p>Produtos não encontrados</p>;
	}

	return (
		<section className="flex flex-col w-full items-center py-8 gap-4 text-white ">
			<Card product={product} />
			<hr className="my-2 border-gray-700" />
			<Description
				description={product.description || "Descrição não encontrada"}
			/>
			<hr className="my-2 border-gray-700" />
			<TechnicalInfo
				technicalInfo={
					product.technicalInfo || "Informações tecnicas não encontradas"
				}
			/>
		</section>
	);
}
