import {create} from 'zustand'
import { fetchCart } from '../lib/actions'
import {ProductProps } from '../lib/definitions'

interface CartStore {
  items_cart: ProductProps[];
  addItemToCart: (item: ProductProps) => void;
  removeItemFromCart: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items_cart: [],

  addItemToCart: (item: ProductProps) =>
    set((state) => ({
      items_cart: [...state.items_cart, item], 
    })),

  removeItemFromCart: (id: string) =>
    set((state) => ({
      items_cart: state.items_cart.filter((item) => item.id !== id), 
    })),
}));