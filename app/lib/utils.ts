export const formatCurrencyBRL = (value: number | null) => {
	if (value === null) {
		return 0;
	}
	const centavosParaReal = value / 100;
	return centavosParaReal.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
};
