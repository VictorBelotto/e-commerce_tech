import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { ProductProps } from '../lib/definitions'

interface CartState{
  cart: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product: ProductProps) => {
        set((state) => ({
          cart: [...state.cart, product],
        }));
      },
      removeFromCart: (productId: string) => {
        set((state) => ({
          cart: state.cart.filter((product) => product.id!== productId),
        }));
      },
    }),
    {
      name: 'cart_storage',
    }
  )
)