import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { ProductProps } from '../lib/definitions'

interface CartState{
  favorites: ProductProps[];
  addToFavorites: (product: ProductProps) => void;
  removeFromFavorites: (productId: string) => void;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<CartState>()(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (product) => {
        set((state) => {
          const productExists = state.favorites.some(p => p.id === product.id)
          if (!productExists) {
            return { favorites: [...state.favorites, product] }
          }else{
            return state
          }
        });
      },
      removeFromFavorites: (productId: string) => {
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id!== productId),
        }));
      },
      clearFavorites: () => {
        set((state) => ({ favorites: [] }));
      },
    }),
   
    {
      name: 'cart_storage',
    }
  )
)