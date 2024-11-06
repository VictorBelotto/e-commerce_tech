"use client";

import { useCartStore } from "@/app/context/store";
import { Card } from "./cart-card";

export function CartWrapper() {
	const { cart } = useCartStore();

	return (
		<section className="flex flex-col w-[70%] px-4 py-4 bg-[#303030] rounded-lg">
			<h5 className="text-white px-4 mb-4">Produtos</h5>
			<hr className="my-2 border-gray-700" />
			{cart &&
				Array.isArray(cart) &&
				cart.map((product) => (
					<div key={product.id}>
						<Card product={product} />
						<hr className="my-2 border-gray-700" />
					</div>
				))}
		</section>
	);
}
