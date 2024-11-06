"use client";
import { useCartStore } from "@/app/context/store";
import { formatCurrencyBRL } from "@/app/lib/utils";
import React, { useEffect } from "react";
import Checkout from "../components/checkout";
import { ButtomBuy } from "./buttons-cart";

const Resume = () => {
	const { cart, onCheckout, setCheckout } = useCartStore();
	useEffect(() => {
		if (cart.length <= 0) {
			setCheckout("cart");
		}
	}, [cart, setCheckout]);

	if (!cart) {
		return (
			<>
				<h3>Sem items</h3>
			</>
		);
	}

	const total = cart.reduce((acc, value) => {
		const price = value.price ?? 0;
		const quantity = value.quantity ?? 1;
		return acc + price * quantity;
	}, 0);

	const valorParcelado = total * 0.1 + total;

	return (
		<aside className="flex flex-col text-white w-[350px] h-fit bg-[#303030] rounded-lg px-4 py-2 ">
			<h5 className="text-center">Resumo</h5>
			<hr className="my-2 mb-4 border-gray-700" />
			<div className="flex flex-col gap-4">
				<div className="flex w-full justify-between">
					<p>Valor dos produtos:</p>
					<p>{formatCurrencyBRL(total)}</p>
				</div>
				<hr className="my-1 border-gray-700" />
				<div className="flex w-full justify-between">
					<p>Total à prazo:</p>
					<p>{formatCurrencyBRL(valorParcelado)}</p>
				</div>
				<hr className="my-2 border-gray-700" />
				<div className="flex w-full justify-between gap-2">
					<p>
						Valor à vista no <b>Pix:</b>
					</p>
					<div className="flex flex-col">
						<p className="text-end">{formatCurrencyBRL(total)}</p>
						<p className="text-[10px]">
							Economize: <b>{formatCurrencyBRL(valorParcelado - total)}</b>
						</p>
					</div>
				</div>
			</div>

			<hr className="mt-2 mb-4 border-gray-700" />
			{cart.length > 0 && <ButtomBuy />}

			{onCheckout === "checkout" && <Checkout />}
		</aside>
	);
};

export default Resume;
