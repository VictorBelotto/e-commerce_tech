"use client";
import { useCartStore } from "@/app/context/store";
import React from "react";
import Cart from "../icons/cart";

const CartComponent = () => {
	const { cart } = useCartStore();
	return (
		<div className="flex">
			<Cart className="cursor-pointer" />
			<span className="flex justify-center items-center bg-orange-500 rounded-full w-5 h-5 ml-1 text-sm font-semibold text-white">
				{cart.length}
			</span>
		</div>
	);
};

export default CartComponent;
