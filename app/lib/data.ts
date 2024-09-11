import { sql } from "@vercel/postgres";
import { ProductProps } from "./definitions";


export async function fetchProducts() {

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const products = await sql<ProductProps> `SELECT * FROM product`
    return products.rows

  } catch (error) {
    console.error('Error: ', error)
    throw new Error('Falha ao carregar produtos.');
  }

}

export async function fetchProductById(id : string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const products = await sql<ProductProps> `SELECT * FROM product WHERE id = ${id}`

    return products.rows

  } catch (error) {
    console.error('Error: ', error)
    throw new Error('Falha ao carregar produtos.');
  }
}

export async function fetchHighlights(){
  const ids = ['7852e3f0-a36f-4fbb-af26-d15e3ff0d7ee', 'cc268cf7-b795-4ef8-a76c-747fc4fa0964', 'cdef65ee-89d4-41b6-8935-47262ebbb229']
try{
  const products = await Promise.all(ids.map(id => fetchProductById(id)))

  console.log(products)

  return products;

}catch(err){
  throw new Error('Falha ao carregar favoritos')
}
 
}