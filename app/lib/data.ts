import { PrismaClient } from "@prisma/client";
import { ProductProps } from "./definitions";
import Stripe from "stripe"

const prisma = new PrismaClient();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-09-30.acacia",
 })

export async function fetchProducts() : Promise<ProductProps[]>{
  try {
    const products = await stripe.products.list()
    const formatedProducts = await Promise.all(
      products.data.map(async (product) => {
        const price = await stripe.prices.list({ product: product.id })
        return {
         id: product.id,
         name: product.name,
         manufacturer: product.metadata.manufacturer,
         technicalInfo: product.metadata.technicalInfo,
         image_url: product.images,
         category: product.metadata.category,
         description: product.description,
         price: price.data[0].unit_amount,
         special_tag: product.metadata.special_tag,
         quantity: 1,
         department: product.metadata.department
        }
      }),
    )
    return formatedProducts
  } catch (error) {
    throw new Error('Erro ao carregar produto')
  }
}

export async function fetchProductById(productId: string): Promise<ProductProps | null> {
  try {
    const product = await stripe.products.retrieve(productId);

    const price = await stripe.prices.list({ product: product.id });

    return {
      id: product.id,
      name: product.name,
      manufacturer: product.metadata.manufacturer || '',
      technicalInfo: product.metadata.technicalInfo || '',
      image_url: product.images, 
      category: product.metadata.category || '',
      description: product.description || '',
      price: price.data[0]?.unit_amount || 0, 
      special_tag: product.metadata.special_tag || '',
      department: product.metadata.department || ''
    };
  } catch (error) {
    console.error('Erro ao carregar produto:', error);
    return null;
  }
}

