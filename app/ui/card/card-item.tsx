import type { ProductProps } from "@/app/lib/definitions";
import { formatCurrencyBRL } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonAddCart } from "../components/buttons";

export function CardItem({ product }: { product: ProductProps }) {
	const { name, id, price, image_url } = product;
	return (
		<section
			className="flex flex-col py-2 px-3 h-[480px] justify-between items-center cursor-pointer text-white group"
			id={id}
		>
			<Link href={`product/${id}`} className="flex w-64 h-64 flex-col">
				<div className="flex w-64 h-64">
					{image_url ? (
						<Image
							src={image_url[0]}
							alt={`Imagem ${image_url[0]}`}
							width={288}
							height={288}
							className="w-64 h-64 rounded-lg brightness-75 group-hover:brightness-100"
						/>
					) : (
						<div className="w-64 h-64 bg-slate-700 rounded-lg" />
					)}
				</div>
				<div className="flex flex-col gap-4 mt-4">
					<p className="w-full font-semibold overflow-hidden text-wrap line-clamp-2 truncate">
						{name}
					</p>
					<div className="flex flex-col gap-1">
						<p className="text-xs text-green-500">à vista</p>
						<p className="font-semibold text-xl text-green-500 ">
							{formatCurrencyBRL(price)}
						</p>
						<p className="text-xs">No PIX com 10% de desconto</p>
					</div>
				</div>
			</Link>
			<div className="flex items-center mt-auto justify-center w-full">
				<ButtonAddCart product={product} />
			</div>
		</section>
	);
}
