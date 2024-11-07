'use server'

import { ProductProps } from "./definitions";
import Stripe from "stripe"
import { stripe } from "./stripe";

export async function fetchProducts() : Promise<ProductProps[]>{
  let allProducts: ProductProps[] = [];
  let lastProductId: string | undefined = undefined;
  let hasMore = true;

  try {
    while (hasMore) {
      const { data: products, has_more } : Stripe.Response<Stripe.ApiList<Stripe.Product>> = await stripe.products.list({
        starting_after: lastProductId,
        limit: 100,
      });
     
      const formattedProducts = await Promise.all(
        products.map(async (product : Stripe.Product) => {
          const price = await stripe.prices.list({ product: product.id });
          return {
            id: product.id,
            name: product.name,
            manufacturer: product.metadata.manufacturer,
            technicalInfo: product.metadata.technicalInfo,
            image_url: product.images,
            category: product.metadata.category,
            description: product.description,
            price: price.data[0]?.unit_amount || 0,
            special_tag: product.metadata.special_tag,
            quantity: 1,
            department: product.metadata.department,
          };
        })
      );

      allProducts = [...allProducts, ...formattedProducts];
      hasMore = has_more;

      if (products.length > 0) {
        lastProductId = products[products.length - 1].id;
      }
    }

    return allProducts;
  } catch (error) {
    throw new Error("Erro ao carregar todos os produtos");
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

