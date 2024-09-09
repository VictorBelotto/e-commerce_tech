import { products } from "../seed/initialProducts";

export function fetchProducts(){
  const {graphicsCards, motherBoards, processors} = products
  return [...graphicsCards, ...motherBoards, ...processors]
}

export function fetchHighlights(){
  
}