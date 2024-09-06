import { products } from "../seed/initialProducts";

export function fetchProducts(){
  const {graphicsCards, motherboards, processors} = products
  return [...graphicsCards, ...motherboards, ...processors]
}

export function fetchHighlights(){
  
}