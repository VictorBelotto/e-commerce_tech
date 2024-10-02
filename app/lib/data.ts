import { PrismaClient } from "@prisma/client";
import { ProductProps } from "./definitions";

const prisma = new PrismaClient();

export async function fetchProducts() : Promise<ProductProps[]>{
  try {
    const products = await prisma.product.findMany();
    
    return products.map((product) => ({
      ...product,
      image_url: JSON.parse(product.image_url) as string[],
    })) as ProductProps[];
  } catch (error) {
    console.error('Error: ', error);
    throw new Error('Falha ao carregar produtos.');
  }
}

export async function fetchProductById(id: string) : Promise<ProductProps> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (product) {
      return {
        ...product,
        image_url: JSON.parse(product.image_url) as string[],
      } as ProductProps
    }

    throw new Error('Produto não encontrado.');
  } catch (error) {
    console.error('Error: ', error);
    throw new Error('Falha ao carregar produto.');
  }
}

export async function fetchProductsByTag() : Promise<ProductProps[]>{
  try {
    const products = await prisma.product.findMany({
      where: {
        special_tag: 'highlight',
      },
    });
    
    return products.map((product) => ({
      ...product,
      image_url: JSON.parse(product.image_url) as string[],
    })) as ProductProps[]
    
  } catch (error) {
    console.error('Error: ', error);
    throw new Error('Falha ao carregar produtos pela tag.');
  }
}
