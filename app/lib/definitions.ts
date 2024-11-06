export interface ProductProps {
	id: string;
	name: string;
	manufacturer: string;
	description: string | null;
	technicalInfo: string;
	image_url: string[] | string;
	category: string;
	price: number | null;
	special_tag: string | null;
	quantity?: number;
	department: string;
}
