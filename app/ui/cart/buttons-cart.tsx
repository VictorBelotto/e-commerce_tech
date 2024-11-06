"use client";
import { useCartStore } from "@/app/context/store";
import type { ProductProps } from "@/app/lib/definitions";
import { Button } from "@chakra-ui/react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AddQuantifyIcon from "../icons/addQuantifyIcon";
import RemoveQuantifyIcon from "../icons/removeQuantifyIcon";

export function ButtonRemoveToCart({ id }: { id: string }) {
	const { removeFromCart } = useCartStore();
	return (
		<Button
			onClick={() => removeFromCart(id)}
			size={"sm"}
			color={"white"}
			colorScheme="red"
			className="mt-auto"
		>
			Remover
		</Button>
	);
}
export function ButtomAddQuantify({ product }: { product: ProductProps }) {
	const { addToCart } = useCartStore();
	return (
		<Button
			onClick={() => addToCart(product)}
			size={"sm"}
			color={"white"}
			colorScheme="blackAlpha"
			variant="ghost"
			className="rounded-full"
		>
			<AddQuantifyIcon />
		</Button>
	);
}

export function ButtomRemoveQuantify({ id }: { id: string }) {
	const { removeQuantity } = useCartStore();
	return (
		<Button
			onClick={() => removeQuantity(id)}
			size={"sm"}
			color={"black"}
			colorScheme="blackAlpha"
			variant="ghost"
			className="rounded-full"
		>
			<RemoveQuantifyIcon />
		</Button>
	);
}

export function ButtomBuy() {
	const router = useRouter();
	const { user } = useUser();
	const useStore = useCartStore();

	const handleCheckout = async () => {
		if (!user) {
			router.push("/sing-in?redirectUrl=/cart");
			useStore.setCheckout("cart");
			return;
		}

		try {
			const response = await fetch("/api/create-payment-intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					items: useStore.cart,
					payment_intent_id: useStore.paymentIntent,
				}),
			});
			const data = await response.json();
			useStore.setPaymentIntent(data.paymentIntent);
			useStore.setCheckout("checkout");
		} catch (error) {
			console.error("Erro ao criar payment intent:", error);
		}
	};

	return (
		<Button
			size={"sm"}
			color={"white"}
			colorScheme="orange"
			variant="solid"
			className="rounded-full"
			onClick={handleCheckout}
		>
			Finalizar pedido
		</Button>
	);
}
