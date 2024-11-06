"use client";
import React, { type ReactNode, useState } from "react";

const Hydrate = ({ children }: { children: ReactNode }) => {
	const [isMounted, setIsMounted] = useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	return isMounted ? (
		<>{children}</>
	) : (
		<>
			<span>Carregando...</span>
		</>
	);
};

export default Hydrate;
