import { sql } from "@vercel/postgres";
import { ProductProps } from "./definitions";

export async function fetchProducts() {

  try {
    const products = await sql<ProductProps> `SELECT * FROM product`
    return  products.rows

  } catch(error) {
    console.error('Error: ', error)
    throw new Error('Falha ao carregar produtos.');
  }

}

export function fetchHighlights() {

}