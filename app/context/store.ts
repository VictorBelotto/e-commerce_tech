import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { ProductProps } from '../lib/definitions'

interface CartState{
  cart: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: string) => void;
  removeQuantity: (productId: string) => void;
  onCheckout: string;
  setCheckout: (checkout : string) => void;
  paymentIntent: string,
  setPaymentIntent: (paymentIntent : string) => void;
  clearCart: () => void;
  clientSecret: string;
  setClientSecret: (clientSecret : string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => {
        set((state) => {
          const updatedCart = state.cart.find(p => p.id === product.id)
          if (updatedCart) {
            updatedCart.quantity = (updatedCart.quantity || 0) + 1
            return { cart: [...state.cart] }
          }else{
            return { cart: [...state.cart, {...product, quantity: 1 }] }
          }
        });
      },
      removeQuantity: (productId: string) => {
        set((state) =>{
          const updatedCart = state.cart.find(p => p.id === productId)
          if(updatedCart){
            updatedCart.quantity = (updatedCart.quantity || 1) > 1? (updatedCart.quantity || 1) - 1 : 1
            return { cart: [...state.cart] }
          }else{
            return state;
          }
        })
      },
      removeFromCart: (productId: string) => {
        set((state) => ({
          cart: state.cart.filter((product) => product.id!== productId),
        }));
      },
      onCheckout : 'cart',
      setCheckout : (checkout) => set(()=> ({onCheckout: checkout})),
      paymentIntent : '',
      setPaymentIntent : (paymentIntent) => set(()=> ({paymentIntent})),
      clearCart: () => set(() => ({ cart: [] })),
      clientSecret: '',
      setClientSecret: (clientSecret) => set(()=> ({clientSecret}))
    }),
   
    {
      name: 'cart_storage',
    }
  )
)