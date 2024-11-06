import type { ProductProps } from "./definitions";

export function addItemToCart(product: ProductProps) {
	const cartStored = localStorage.getItem("cart");
	let cartArray = [];

	if (cartStored) {
		cartArray = JSON.parse(cartStored);
	}

	if (!cartArray.find((item: ProductProps) => item.id === product.id)) {
		cartArray.push(product);
	}
	const newCartStorage = JSON.stringify(cartArray);

	localStorage.setItem("cart", newCartStorage);
}

export function removeItemCart(id: string) {
	const cartStored = localStorage.getItem("cart");
	let cartArray: ProductProps[] = [];

	if (cartStored) {
		cartArray = JSON.parse(cartStored);
	}

	cartArray = cartArray.filter((item: ProductProps) => item.id !== id);
	console.log("Cart: ", cartArray);
	const newCartStorage = JSON.stringify(cartArray);

	localStorage.setItem("cart", newCartStorage);
}

export function fetchCart() {
	try {
		if (typeof window !== "undefined") {
			const data = localStorage.getItem("cart");
			return data ? JSON.parse(data) : [];
		}
	} catch (error) {
		throw new Error("Erro ao carregar carrinho");
	}
}
